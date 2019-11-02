import {Component, OnInit} from '@angular/core';
import {IContact} from '../../models/contacts-page.model';
import {ContactsPageService} from '../../services/contacts-page.service';

@Component({
  selector: 'app-edit-contacts',
  styleUrls: ['./contacts.component.sass'],
  templateUrl: './contacts.component.html',
})
export class EditContactsComponent implements OnInit {
  contacts;
  pageSize = 8;
  page = 1;
  constructor(private contactsService: ContactsPageService) { }

  ngOnInit() {
    this.contacts = [];
    this.contactsService.getContacts().subscribe((contacts: IContact[]) => {
      this.contacts = contacts;
    });
  }

  deleteItem(contact) {
    this.contacts.forEach((item, i) => {
      if (item._id === contact._id) {
        this.contacts.splice(i, 1);
      }
    });
    this.contactsService.deleteContact(contact).subscribe(() => console.log('Delete!'));
  }
}
