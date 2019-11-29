import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProfileService } from '../../../shared/services/profile.service';
import { IProfile } from '../../../shared/models/profile.model';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  @Output() notify: EventEmitter<any> = new EventEmitter();
  color: string;
  background: string;
  profile: IProfile;
  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService
  ) {}
  profileModel = {
    background: [null, [Validators.required]]
  };
  profileForm = this.fb.group(this.profileModel);
  get f() {
    return this.profileForm.controls as {
      [K in keyof this['profileModel']]: AbstractControl;
    };
  }

  ngOnInit() {
    this.profileService.getData().subscribe((profile: IProfile) => {
      this.profile = profile;
      this.color = profile.color;
      this.background = profile.background;
    });
  }

  changeColor(color) {
    document.documentElement.style.setProperty('--color', color);
    this.profile.color = color;
  }

  save() {
    this.profileService.updateData(this.profile).subscribe(
      () => {
        this.notify.emit({ type: 'success', message: 'Сохранено!' });
      },
      () => this.notify.emit({ type: 'error', message: 'Ошибка сохранения!' })
    );
  }

  changeBackground() {
    const background = this.profileForm.value.background;
    document.documentElement.style.setProperty(
      '--background-image',
      `url(${background})`
    );
  }
}
