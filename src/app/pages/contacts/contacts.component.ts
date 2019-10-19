import { Component, OnInit } from '@angular/core';
import { contacts} from "../../data";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {
  contacts;
  
  constructor() { }

  ngOnInit() {
    this.contacts = contacts;
  }
}
