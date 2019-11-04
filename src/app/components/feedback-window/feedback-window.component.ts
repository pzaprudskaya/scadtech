import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from "@angular/forms";
import {IValue} from "../../admin/models/about-company-page.model";
import {ValuesService} from "../../admin/services/values.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-feedback-window',
  templateUrl: './feedback-window.component.html',
  styleUrls: ['./feedback-window.component.sass']
})
export class FeedbackWindowComponent implements OnInit {

  feedbackModel = {
    surname: [null, [Validators.required]],
    name: [null, [Validators.required]],
    middleName: [null, [Validators.required]],
    email: [null, [Validators.required]],
    phone: [null, [Validators.required]],
    text: [null, [Validators.required]],
  };
  feedbackForm = this.fb.group(this.feedbackModel);

  get f() {
    return this.feedbackForm.controls as {
      [K in keyof (this[ 'feedbackModel' ])]: AbstractControl;
    };
  }

  constructor(private fb: FormBuilder,
              private valuesService: ValuesService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.feedbackForm.controls.surname.setValue('');
    this.feedbackForm.controls.name.setValue('');
    this.feedbackForm.controls.middleName.setValue('');
    this.feedbackForm.controls.email.setValue('');
    this.feedbackForm.controls.phone.setValue('');
    this.feedbackForm.controls.text.setValue('');
  }

  sendFeedback() {
    this.feedbackForm.markAllAsTouched();

    if (this.feedbackForm.invalid) {
      return;
    }
    this.valuesService.addValue(this.feedbackForm.value).subscribe(() => console.log('Add!'));
  }
}
