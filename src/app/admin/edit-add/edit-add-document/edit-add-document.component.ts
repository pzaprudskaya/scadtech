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
      this.document.controls.title.setValue('');
      this.document.controls.date.setValue('');
      this.document.controls.number.setValue('');
      this.document.controls.validity.setValue('');
      this.document.controls.descriptionIssuedBy.setValue('');
      this.document.controls.descriptionTypesOfJobs.setValue('');
      this.document.controls.link.setValue('');
    } else {
      this.state = false;
      this.documentService.getDocument(this.route.snapshot.params.id).subscribe((value: IDocument) => {
        this.document.controls.title.setValue(value[0].title);
        this.document.controls.date.setValue(value[0].date);
        this.document.controls.number.setValue(value[0].number);
        this.document.controls.validity.setValue(value[0].validity);
        this.document.controls.descriptionIssuedBy.setValue(value[0].descriptionIssuedBy);
        this.document.controls.descriptionTypesOfJobs.setValue(value[0].descriptionTypesOfJobs);
        this.document.controls.link.setValue(value[0].link);
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
    this.file.title = this.document.value.title;
    this.file.date = this.document.value.date;
    this.file.number = this.document.value.number;
    this.file.validity = this.document.value.validity;
    this.file.descriptionIssuedBy = this.document.value.descriptionIssuedBy;
    this.file.descriptionTypesOfJobs = this.document.value.descriptionTypesOfJobs;
    this.file.link = this.document.value.link;

    this.documentService.updateDocument(this.file).subscribe(() => console.log('Update!'));
  }
}

