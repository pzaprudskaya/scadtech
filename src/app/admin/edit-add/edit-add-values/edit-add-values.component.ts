import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, AbstractControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {IValue} from '../../../shared/models/about-company-page.model';
import {ValuesService} from '../../../shared/services/values.service';

@Component({
  styleUrls: ['./edit-add-values.component.sass'],
  templateUrl: './edit-add-values.component.html',
})
export class EditAddValuesComponent implements OnInit {

  imageURL: any;

  valueModel = {
    image: [null, [Validators.required]],
    name: [null, [Validators.required]],
    description: [null, [Validators.required]],
  };
  state: boolean;
  value = this.fb.group(this.valueModel);
  worth: IValue;

  get f() {
    return this.value.controls as {
      [K in keyof (this[ 'valueModel' ])]: AbstractControl;
    };
  }

  constructor( private fb: FormBuilder,
               private valuesService: ValuesService,
               private route: ActivatedRoute ) {
  }

  ngOnInit() {
    if (this.route.snapshot.params.id === 'add') {
      this.state = true;
      this.value.controls.image.setValue('');
      this.value.controls.name.setValue('');
      this.value.controls.description.setValue('');
    } else {
      this.state = false;
      this.valuesService.getValue(this.route.snapshot.params.id).subscribe((value: IValue) => {
        this.value.controls.image.setValue(value[0].image);
        this.value.controls.name.setValue(value[0].name);
        this.value.controls.description.setValue(value[0].description);
      });
    }
  }

  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.imageURL = file;
  }

  addValue() {
    this.value.markAllAsTouched();
    const formData = new FormData();
    formData.append('image', this.imageURL);

    if (this.value.invalid) {
      return;
    }
    this.valuesService.addValue(this.value.value).subscribe((value) => {
      this.valuesService.addImage(value._id, formData).subscribe(() => console.log('Add Image!'));
    });
  }

  updateValue() {
    this.value.markAllAsTouched();

    if (this.value.invalid) {
      return;
    }
    const formData = new FormData();
    formData.append('image', this.imageURL);
    this.worth.image = this.value.value.image;
    this.worth.name = this.value.value.name;
    this.worth.description = this.value.value.description;
    this.valuesService.updateValue(this.worth).subscribe((value) => {
      this.valuesService.addImage(value[0]._id, formData).subscribe(() => console.log('Add Image!'));
    });

  }
}

