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
  fileName: string;
  partnerModel = {
    name: [null, [Validators.required]],
    image: [null, [Validators.required]],
    description: [null, [Validators.required]],
    file: [null, [Validators.required]],
  };
  state: boolean;
  partner = this.fb.group(this.partnerModel);

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
      this.state = true;
      this.partner.reset();
    } else {
      this.state = false;
      this.partnersService.getPartner(this.route.snapshot.params.id).subscribe((member: IPartners) => {
        this.partner.reset(member[0]);
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
    this.partnersService.updatePartner(this.route.snapshot.params.id, this.partner.value).subscribe(() => console.log('Update!'));
  }
  changeValue(file) {
    this.fileName = file.name;
  }
}

