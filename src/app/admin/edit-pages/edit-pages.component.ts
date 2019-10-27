import {Component, OnInit} from '@angular/core';
import {MENU_ITEMS} from './pages-menu';

@Component({
  selector: 'app-edit-pages',
  styleUrls: ['./edit-pages.component.sass'],
  templateUrl: './edit-pages.component.html',
})
export class EditPagesComponent implements OnInit {
  menu = MENU_ITEMS;
  constructor() {}

  ngOnInit() {}
}
