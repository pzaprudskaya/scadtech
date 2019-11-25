import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IValue } from '../../../shared/models/about-company-page.model';
import { ValuesService } from '../../../shared/services/values.service';

@Component({
  styleUrls: [ './edit-add-values.component.sass' ],
  templateUrl: './edit-add-values.component.html',
})
export class EditAddValuesComponent implements OnInit {
  imageURL: any;
  imagePreview: ArrayBuffer | string;

  valueModel = {
    image: [ null, [] ],
    name: [ null, [ Validators.required ] ],
    description: [ null, [ Validators.required ] ],
  };
  state: boolean;
  worth = this.fb.group(this.valueModel);

  get f() {
    return this.worth.controls as {
      [ K in keyof (this[ 'valueModel' ]) ]: AbstractControl;
    };
  }

  constructor(private fb: FormBuilder, private valuesService: ValuesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.route.snapshot.params.id === 'add') {
      this.state = true;
    } else {
      this.state = false;
      this.valuesService.getValue(this.route.snapshot.params.id).subscribe((value: IValue) => {
        this.worth.reset(value[0]);
      });
    }
  }

  addValue() {
    this.worth.markAllAsTouched();
    if (this.worth.invalid || !this.imageURL) {
      return;
    }
    const formData = new FormData();
    formData.append('image', this.imageURL);
    console.log(this.worth.invalid);
    this.valuesService.addValue(this.worth.value).subscribe((value) => {
      this.valuesService.addImage(value._id, formData).subscribe(() => console.log('Add Image!'));
    });
  }

  updateValue() {
    if (this.worth.controls.name.invalid && this.worth.controls.description.invalid) {
      return;
    }
    this.worth.markAllAsTouched();
    if (this.imageURL) {
      const formData = new FormData();
      formData.append('image', this.imageURL);
      return this.valuesService.addImage(this.route.snapshot.params.id, formData)
        .subscribe((e) => {
          this.worth.controls.image.setValue(e.image);
          this.valuesService.updateValue(this.route.snapshot.params.id, this.worth.value).subscribe(() => console.log(''));
        });
    }
    this.valuesService.updateValue(this.route.snapshot.params.id, this.worth.value).subscribe(() => console.log(''));
  }
  changeValue(event) {
    const file = (event.target as HTMLInputElement).files[ 0 ];
    this.imageURL = file;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = file => {
      this.imagePreview = reader.result;
    };
  }
}

