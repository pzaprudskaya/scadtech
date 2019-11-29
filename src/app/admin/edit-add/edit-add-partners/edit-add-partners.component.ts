import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Validators, FormBuilder, AbstractControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {PartnersPageService} from '../../../shared/services/partners-page.service';
import {IPartners} from '../../../shared/models/partners-page.model';
import { Location } from "@angular/common";

@Component({
  styleUrls: ['./edit-add-partners.component.sass'],
  templateUrl: './edit-add-partners.component.html',
})
export class EditAddPartnersComponent implements OnInit {
  @Output() notify: EventEmitter<any> = new EventEmitter();
  imageURL: any;
  fileURL: any;
  imagePreview: ArrayBuffer | string;

  partnerModel = {
    name: [null, [Validators.required]],
    image: [null, []],
    description: [null, [Validators.required]],
    file: [null, []],
  };
  state: boolean;
  partner = this.fb.group(this.partnerModel);

  get f() {
    return this.partner.controls as {
      [K in keyof (this[ 'partnerModel' ])]: AbstractControl;
    };
  }

  constructor(private fb: FormBuilder,
              private partnersService: PartnersPageService,
              private route: ActivatedRoute,
              private location: Location ) {}

  ngOnInit() {
    if (this.route.snapshot.params.id === 'add') {
      this.state = true;
    } else {
      this.state = false;
      this.partnersService.getPartner(this.route.snapshot.params.id).subscribe((member: IPartners) => {
        Object.keys(this.f).forEach(key => this.f[key].setValue(member[key]));
      });
    }
  }

  addPartner() {
    this.partner.markAllAsTouched();
    if (this.partner.invalid || !this.imageURL || !this.fileURL) {
      return;
    }
    const imageFormData = new FormData();
    imageFormData.append('image', this.imageURL);
    const fileFormData = new FormData();
    fileFormData.append('file', this.fileURL);

    this.partnersService.addPartner(this.partner.value).subscribe((partner) => {
      this.notify.emit({type: 'success', message: 'Запись добавлена!'});
      this.location.back();

      this.partnersService.addImage(partner._id, imageFormData).subscribe(() => console.log('Add Image!'));
      this.partnersService.addFile(partner._id, fileFormData).subscribe(() => console.log('Add file!'));
    }, () => this.notify.emit( {type: 'error', message: 'Ошибка добавления!'} ) );
  }

  updatePartner() {
    console.log(this.partner);
    if (this.partner.invalid) {
      return;
    }
    this.partner.markAllAsTouched();
    console.log(this.imageURL);
    if (this.imageURL) {
      const formData = new FormData();
      formData.append('image', this.imageURL);
      this.partnersService.addImage(this.route.snapshot.params.id, formData)
        .subscribe((e) => {
          console.log('');
        });
    }
    if (this.fileURL) {
      const formData = new FormData();
      formData.append('file', this.fileURL);
      this.partnersService.addFile(this.route.snapshot.params.id, formData)
        .subscribe((e) => {
          console.log('');
        });
    }
    const localPartner = { ...this.partner.value };
    delete localPartner.file;
    delete localPartner.image;
    this.partnersService.updatePartner(this.route.snapshot.params.id, localPartner).subscribe((value) => {
      this.notify.emit({type: 'success', message: 'Запись обновлена!'});
      this.location.back();
    }, () => this.notify.emit( {type: 'error', message: 'Ошибка обновления!'} ) );
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

  changeFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.fileURL = file;
  }
}

