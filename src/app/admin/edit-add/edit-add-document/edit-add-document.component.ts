import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDocument } from '../../../shared/models/document.model';
import { DocumentService } from '../../../shared/services/document.service';

@Component({
  styleUrls: ['./edit-add-document.component.sass'],
  templateUrl: './edit-add-document.component.html'
})
export class EditAddDocumentComponent implements OnInit {
  @Output() notify: EventEmitter<any> = new EventEmitter();
  fileName: string;
  documentModel = {
    title: [null, [Validators.required]],
    date: [null, []],
    number: [null, []],
    validity: [null, []],
    descriptionIssuedBy: [null, []],
    descriptionTypesOfJobs: [null, []],
    link: [null, [Validators.required]]
  };
  state: boolean;
  document = this.fb.group(this.documentModel);
  file: IDocument;

  get f() {
    return this.document.controls as {
      [K in keyof this['documentModel']]: AbstractControl;
    };
  }

  constructor(
    private fb: FormBuilder,
    private documentService: DocumentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.route.snapshot.params.id === 'add') {
      this.state = true;
      this.document.reset();
    } else {
      this.state = false;
      this.documentService
        .getDocument(this.route.snapshot.params.id)
        .subscribe((value: IDocument) => {
          Object.keys(this.f).forEach(key => this.f[key].setValue(value[key]));
        });
    }
  }

  addDocument() {
    this.document.markAllAsTouched();
    if (this.document.invalid) {
      return;
    }
    this.documentService.addDocument(this.document.value).subscribe(
      () => {
        this.notify.emit({ type: 'success', message: 'Запись добавлена!' });
        this.router.navigate(['/edit-documentation']);
      },
      () => this.notify.emit({ type: 'error', message: 'Ошибка добавления!' })
    );
  }

  updateDocument() {
    this.document.markAllAsTouched();
    if (this.document.invalid) {
      return;
    }
    this.documentService
      .updateDocument(this.route.snapshot.params.id, this.document.value)
      .subscribe(
        () => {
          this.notify.emit({ type: 'success', message: 'Запись обновлена!' });
          this.router.navigate(['/edit-documentation']);
        },
        () => this.notify.emit({ type: 'error', message: 'Ошибка обновления!' })
      );
  }

  changeValue(file) {
    this.fileName = file.name;
  }
}
