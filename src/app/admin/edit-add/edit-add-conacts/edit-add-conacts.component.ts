import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, AbstractControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ContactsPageService} from '../../services/contacts-page.service';
import {IContact} from '../../models/contacts-page.model';

@Component({
  styleUrls: ['./edit-add-conacts.component.sass'],
  templateUrl: './edit-add-conacts.component.html',
})
export class EditAddConactsComponent implements OnInit {
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
  member: IContact;

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
      this.contact.controls.name.setValue('');
      this.contact.controls.image.setValue('');
      this.contact.controls.numbers.setValue('');
      this.contact.controls.addresses.setValue('');
      this.contact.controls.faxes.setValue('');
      this.contact.controls.emails.setValue('');
    } else {
      this.state = false;
      this.contactsService.getContact(this.route.snapshot.params.id).subscribe((member: IContact) => {
        this.contact.controls.name.setValue(member[0].name);
        this.contact.controls.image.setValue(member[0].image);
        this.contact.controls.numbers.setValue(member[0].numbers);
        this.contact.controls.addresses.setValue(member[0].addresses);
        this.contact.controls.faxes.setValue(member[0].faxes);
        this.contact.controls.emails.setValue(member[0].emails);
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
    this.member.name = this.contact.value.name;
    this.member.image = this.contact.value.image;
    this.member.numbers = this.contact.value.numbers;
    this.member.addresses = this.contact.value.addresses;
    this.member.faxes = this.contact.value.faxes;
    this.member.emails = this.contact.value.emails;
    this.contactsService.updateContact(this.member).subscribe(() => console.log('Update!'));
  }

}

