import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, AbstractControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {IValue} from '../../models/about-company-page.model';
import {ValuesService} from '../../services/values.service';

@Component({
  styleUrls: ['./edit-add-values.component.sass'],
  templateUrl: './edit-add-values.component.html',
})
export class EditAddValuesComponent implements OnInit {

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

  addValue() {
    this.value.markAllAsTouched();

    if (this.value.invalid) {
      return;
    }
    this.valuesService.addValue(this.value.value).subscribe( () => console.log('Add!'));
  }

  updateValue() {
    this.value.markAllAsTouched();

    if (this.value.invalid) {
      return;
    }
    this.worth.image = this.value.value.image;
    this.worth.name = this.value.value.name;
    this.worth.description = this.value.value.description;
    this.valuesService.updateValue(this.worth).subscribe(() => console.log('Update!'));
  }
}

