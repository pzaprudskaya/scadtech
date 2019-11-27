import { Component, OnInit, ViewChild } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';
import { NotificationComponent } from '../edit-components/notification/notification.component';

@Component({
  selector: 'app-edit-pages',
  styleUrls: ['./edit-pages.component.sass'],
  templateUrl: './edit-pages.component.html'
})
export class EditPagesComponent implements OnInit {
  @ViewChild('notification', { static: true })
  notification: NotificationComponent;
  menu = MENU_ITEMS;
  constructor() {}

  ngOnInit() {}

  onActivate(componentReference) {
    console.log(componentReference);

    componentReference.notify.subscribe(data => {
      this.notification.showNotification(data.type, data.message);
    });
  }
}
