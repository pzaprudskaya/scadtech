import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  @Input() contact;
  state: boolean;
  constructor() { }

  ngOnInit() {
    this.state = false;
    if (this.contact.name === 'Главный офис в Москве'){
      const contact = document.getElementById("contact");
      contact.classList.add('big-card');
    }
  }
  openInformation() {
    this.state = !this.state;
    const contact = document.getElementById("contact");
    if (this.state === true) {
      contact.classList.add("selected");
    } else {
      contact.classList.remove("selected");
    }
  }
}
