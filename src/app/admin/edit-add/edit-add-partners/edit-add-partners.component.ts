import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, AbstractControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {PartnersPageService} from '../../../shared/services/partners-page.service';
import {IPartners} from '../../../shared/models/partners-page.model';

@Component({
  styleUrls: ['./edit-add-partners.component.sass'],
  templateUrl: './edit-add-partners.component.html',
})
export class EditAddPartnersComponent implements OnInit {
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
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.route.snapshot.params.id === 'add') {
      this.state = true;
    } else {
      this.state = false;
      this.partnersService.getPartner(this.route.snapshot.params.id).subscribe((member: IPartners) => {
        this.partner.reset(member[0]);
      });
    }
  }

  addPartner() {
    this.partner.markAllAsTouched();
    if (this.partner.invalid || !this.imageURL || !this.fileURL) {
      return;
    }
    const formData = new FormData();
    formData.append('image', this.imageURL);
    const formDataForFile = new FormData();
    formData.append('file', this.fileURL);

    this.partnersService.addPartner(this.partner.value).subscribe((partner) => {
      this.partnersService.addImage(partner._id, formData).subscribe(() => console.log('Add Image!'));
      this.partnersService.addFile(partner._id, formDataForFile).subscribe(() => console.log('Add file!'));
    });
  }

  updatePartner() {
    if (this.partner.invalid) {
      return;
    }
    this.partner.markAllAsTouched();
    if (this.imageURL) {
      const formData = new FormData();
      formData.append('image', this.imageURL);
      return this.partnersService.addImage(this.route.snapshot.params.id, formData)
        .subscribe((e) => {
          this.partner.controls.image.setValue(e.image);
          this.partnersService.updatePartner(this.route.snapshot.params.id, this.partner.value).subscribe(() => console.log(''));
        });
    }
    this.partnersService.updatePartner(this.route.snapshot.params.id, this.partner.value).subscribe(() => console.log(''));
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

