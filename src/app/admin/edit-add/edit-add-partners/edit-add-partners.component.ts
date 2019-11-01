import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, AbstractControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {IPartners} from '../../models/partners-page.model';
import {PartnersPageService} from '../../services/partners-page.service';

@Component({
  styleUrls: ['./edit-add-partners.component.sass'],
  templateUrl: './edit-add-partners.component.html',
})
export class EditAddPartnersComponent implements OnInit {

  partnerModel = {
    name: [null, [Validators.required]],
    image: [null, [Validators.required]],
    descendants: [null, [Validators.required]],
    file: [null, [Validators.required]],
  };
  state: boolean;
  partner = this.fb.group(this.partnerModel);
  member: IPartners;

  get f() {
    return this.partner.controls as {
      [K in keyof (this[ 'partnerModel' ])]: AbstractControl;
    };
  }

  constructor( private fb: FormBuilder,
               private partnersService: PartnersPageService,
               private route: ActivatedRoute ) {
  }

  ngOnInit() {
    if (this.route.snapshot.params.id === 'add') {
      debugger;
      this.state = true;
      this.partner.controls.name.setValue('');
      this.partner.controls.image.setValue('');
      this.partner.controls.description.setValue('');
      this.partner.controls.file.setValue('');
    } else {
      this.state = false;
      this.partnersService.getPartner(this.route.snapshot.params.id).subscribe((member: IPartners) => {
        this.partner.controls.name.setValue(member[0].name);
        this.partner.controls.image.setValue(member[0].image);
        this.partner.controls.description.setValue(member[0].description);
        this.partner.controls.file.setValue(member[0].file);
      });
    }
  }

  addPartner() {
    this.partner.markAllAsTouched();

    if (this.partner.invalid) {
      return;
    }
    this.partnersService.addPartner(this.partner.value).subscribe((leader) => console.log('Add!'));
  }

  updatePartner() {
    this.partner.markAllAsTouched();

    if (this.partner.invalid) {
      return;
    }
    this.member.name = this.partner.value.name;
    this.member.image = this.partner.value.image;
    this.member.description = this.partner.value.description;
    this.member.file = this.partner.value.file;
    this.partnersService.updatePartner(this.member).subscribe(() => console.log('Update!'));
  }
}

