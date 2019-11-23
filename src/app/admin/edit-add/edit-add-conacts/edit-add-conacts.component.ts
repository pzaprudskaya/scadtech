import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, AbstractControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {IContact} from '../../../shared/models/contacts-page.model';
import {ContactsPageService} from '../../../shared/services/contacts-page.service';

@Component({
  styleUrls: ['./edit-add-conacts.component.sass'],
  templateUrl: './edit-add-conacts.component.html',
})
export class EditAddConactsComponent implements OnInit {
  fileName: string;
  contactModel = {
    name: [null, [Validators.required]],
    image: [null, [Validators.required]],
    numbers: [null, [Validators.required]],
    addresses: [null, [Validators.required]],
    faxes: [null, [Validators.required]],
    emails: [null, [Validators.required]],
  };
  state: boolean;
  contact = this.fb.group(this.contactModel);

  get f() {
    return this.contact.controls as {
      [K in keyof (this[ 'contactModel' ])]: AbstractControl;
    };
  }

  constructor( private fb: FormBuilder,
               private contactsService: ContactsPageService,
               private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.route.snapshot.params.id === 'add') {
      this.state = true;
      this.contact.reset();
    } else {
      this.state = false;
      this.contactsService.getContact(this.route.snapshot.params.id).subscribe((member: IContact) => {
        this.contact.reset(member[0]);
      });
    }
  }

  addContact() {
    this.contact.markAllAsTouched();
    if (this.contact.invalid) {
      return;
    }
    this.contactsService.addContact(this.contact.value).subscribe( () => console.log('Add!'));
  }

  updateContact() {
    this.contact.markAllAsTouched();
    if (this.contact.invalid) {
      return;
    }
    this.contactsService.updateContact(this.route.snapshot.params.id, this.contact.value).subscribe(() => console.log('Update!'));
  }

  changeValue(file) {
    this.fileName = file.name;
  }
}

