import { Component, OnInit } from '@angular/core';
import { IAllDocuments } from '../../../shared/models/document.model';
import { DocumentService } from '../../../shared/services/document.service';

@Component({
  selector: 'app-edit-documentation',
  styleUrls: ['./documentation.component.sass'],
  templateUrl: './documentation.component.html'
})
export class EditDocumentationComponent implements OnInit {
  documents;
  countDocuments;
  pageSize = 6;
  page = 1;

  constructor(private documentsService: DocumentService) {}

  ngOnInit() {
    this.documents = [];
    this.documentsService
      .getDocuments(this.pageSize, this.pageSize * (this.page - 1))
      .subscribe((documents: IAllDocuments) => {
        this.countDocuments = documents.count;
        this.documents = documents.data;
      });
  }

  deleteDocument(document) {
    this.documents.forEach((item, i) => {
      if (item._id === document._id) {
        this.documents.splice(i, 1);
      }
    });
    this.documentsService
      .deleteDocument(document)
      .subscribe(() => console.log('Delete!'));
  }

  changePage(page) {
    this.documentsService
      .getDocuments(this.pageSize, this.pageSize * (page - 1))
      .subscribe((documents: IAllDocuments) => {
        this.countDocuments = documents.count;
        this.documents = documents.data;
      });
  }
}
