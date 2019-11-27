import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IContact } from '../../../shared/models/contacts-page.model';
import { ContactsPageService } from '../../../shared/services/contacts-page.service';

@Component({
  styleUrls: ['./edit-add-conacts.component.sass'],
  templateUrl: './edit-add-conacts.component.html'
})
export class EditAddConactsComponent implements OnInit {
  imageURL: any;
  imagePreview: ArrayBuffer | string;

  contactModel = {
    name: [null, [Validators.required]],
    image: [null, []],
    numbers: [null, [Validators.required]],
    addresses: [null, [Validators.required]],
    faxes: [null, [Validators.required]],
    emails: [null, [Validators.required]]
  };
  state: boolean;
  contact = this.fb.group(this.contactModel);

  get f() {
    return this.contact.controls as {
      [K in keyof this['contactModel']]: AbstractControl;
    };
  }

  constructor(
    private fb: FormBuilder,
    private contactsService: ContactsPageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.route.snapshot.params.id === 'add') {
      this.state = true;
    } else {
      this.state = false;
      this.contactsService
        .getContact(this.route.snapshot.params.id)
        .subscribe((contact: IContact) => {
          Object.keys(this.f).forEach(key =>
            this.f[key].setValue(contact[key])
          );
        });
    }
  }

  addContact() {
    this.contact.markAllAsTouched();
    if (this.contact.invalid || !this.imageURL) {
      return;
    }
    const formData = new FormData();
    formData.append('image', this.imageURL);
    console.log(this.contact.invalid);
    this.contactsService.addContact(this.contact.value).subscribe(value => {
      this.contactsService
        .addImage(value._id, formData)
        .subscribe(() => console.log('Add Image!'));
    });
  }

  updateContact() {
    this.contact.markAllAsTouched();
    if (this.contact.invalid) {
      return;
    }
    if (this.imageURL) {
      const formData = new FormData();
      formData.append('image', this.imageURL);
      return this.contactsService
        .addImage(this.route.snapshot.params.id, formData)
        .subscribe(e => {
          this.contact.controls.image.setValue(e.image);
          this.contactsService
            .updateContact(this.route.snapshot.params.id, this.contact.value)
            .subscribe(() => console.log(''));
        });
    }
    this.contactsService
      .updateContact(this.route.snapshot.params.id, this.contact.value)
      .subscribe(() => console.log(''));
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
