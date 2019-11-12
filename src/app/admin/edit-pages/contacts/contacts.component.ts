import {Component, OnInit} from '@angular/core';
import {IAllContacts} from '../../../shared/models/contacts-page.model';
import {ContactsPageService} from '../../../shared/services/contacts-page.service';

@Component({
  selector: 'app-edit-contacts',
  styleUrls: ['./contacts.component.sass'],
  templateUrl: './contacts.component.html',
})
export class EditContactsComponent implements OnInit {
  contacts;
  pageSize = 8;
  page = 1;
  countContacts;
  constructor(private contactsService: ContactsPageService) { }

  ngOnInit() {
    this.contacts = [];
    this.contactsService.getContacts(this.pageSize, this.pageSize * (this.page - 1)).subscribe((contacts: IAllContacts) => {
      this.countContacts = contacts.count;
      this.contacts = contacts.data;
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
  changePage(page) {
    this.contactsService.getContacts(this.pageSize, this.pageSize * (page - 1)).subscribe((contacts: IAllContacts) => {
      this.contacts = contacts.data;
    });
  }
}
