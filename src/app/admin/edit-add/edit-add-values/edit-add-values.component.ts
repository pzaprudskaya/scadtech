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
  worth = this.fb.group(this.valueModel);

  get f() {
    return this.worth.controls as {
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
      this.worth.reset();
    } else {
      this.state = false;
      this.valuesService.getValue(this.route.snapshot.params.id).subscribe((value: IValue) => {
        this.worth.reset(value[0]);
      });
    }
  }

  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.imageURL = file;
  }

  addValue() {
    this.worth.markAllAsTouched();
    const formData = new FormData();
    formData.append('image', this.imageURL);
    if (this.worth.invalid) {
      return;
    }
    this.valuesService.addValue(this.worth.value).subscribe((value) => {
      this.valuesService.addImage(value._id, formData).subscribe(() => console.log('Add Image!'));
    });
  }

  updateValue() {
    this.worth.markAllAsTouched();
    if (this.worth.invalid) {
      return;
    }
    const formData = new FormData();
    formData.append('image', this.imageURL);
    this.valuesService.updateValue(this.route.snapshot.params.id, this.worth.value).subscribe((value) => {
      this.valuesService.addImage(value[0]._id, formData).subscribe(() => console.log('Add Image!'));
    });

  }
}

