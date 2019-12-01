import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProfileService } from '../../../shared/services/profile.service';
import { IProfile } from '../../../shared/models/profile.model';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { IValue } from "../../../shared/models/about-company-page.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  @Output() notify: EventEmitter<any> = new EventEmitter();
  color: string;
  profile: IProfile;
  imageURL: any;
  imagePreview: ArrayBuffer | string;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService
  ) {}
  profileModel = {
    color: [null, []],
    image: [null, []]
  };
  profileForm = this.fb.group(this.profileModel);
  get f() {
    return this.profileForm.controls as {
      [K in keyof this['profileModel']]: AbstractControl;
    };
  }

  ngOnInit() {
    this.profileService.getData().subscribe((profile: IProfile) => {
      Object.keys(this.f).forEach(key => this.f[key].setValue(profile[key]));
    });
  }

  changeColor(color) {
    document.documentElement.style.setProperty('--color', color);
    this.profile.color = color;
  }

  save() {
    debugger;
    if (this.imageURL) {
      const formData = new FormData();
      formData.append('image', this.imageURL);
      return this.profileService.addImage(formData)
        .subscribe(e => {
          this.profileForm.controls.image.setValue(e.image);
          this.profileService
            .updateData(this.profileForm.value)
            .subscribe(
              value => {
                this.notify.emit({ type: 'success', message: 'Запись обновлена!' });
              },
              () =>
                this.notify.emit({ type: 'error', message: 'Ошибка обновления!' })
            );
        });
    }
    this.profileService
      .updateData(this.profileForm.value)
      .subscribe(
        () => {
          this.notify.emit({ type: 'success', message: 'Запись обновлена!' });
        },
        () => this.notify.emit({ type: 'error', message: 'Ошибка обновления!' })
      );
  }
  changeValue(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.imageURL = file;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = file => {
      this.imagePreview = reader.result;
    };
  }
}
