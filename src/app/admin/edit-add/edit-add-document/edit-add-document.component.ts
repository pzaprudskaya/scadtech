import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, AbstractControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {IDocument} from '../../../shared/models/document.model';
import {DocumentService} from '../../../shared/services/document.service';

@Component({
  styleUrls: ['./edit-add-document.component.sass'],
  templateUrl: './edit-add-document.component.html',
})
export class EditAddDocumentComponent implements OnInit {

  documentModel = {
    title: [null, [Validators.required]],
    date: [null, [Validators.required]],
    number: [null, [Validators.required]],
    validity: [null, [Validators.required]],
    descriptionIssuedBy: [null, [Validators.required]],
    descriptionTypesOfJobs: [null, [Validators.required]],
    link: [null, [Validators.required]],
  };
  state: boolean;
  document = this.fb.group(this.documentModel);
  file: IDocument;

  get f() {
    return this.document.controls as {
      [K in keyof (this[ 'documentModel' ])]: AbstractControl;
    };
  }

  constructor(private fb: FormBuilder,
              private documentService: DocumentService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.route.snapshot.params.id === 'add') {
      this.state = true;
      this.document.reset();
    } else {
      this.state = false;
      this.documentService.getDocument(this.route.snapshot.params.id).subscribe((value: IDocument) => {
        this.document.reset(value[0]);
      });
    }
  }

  addDocument() {
    this.document.markAllAsTouched();
    if (this.document.invalid) {
      return;
    }
    this.documentService.addDocument(this.document.value).subscribe(() => console.log('Add!'));
  }

  updateDocument() {
    this.document.markAllAsTouched();
    if (this.document.invalid) {
      return;
    }
    this.documentService.updateDocument(this.route.snapshot.params.id, this.document.value).subscribe(() => console.log('Update!'));
  }
}

