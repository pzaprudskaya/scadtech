import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.sass']
})
export class EventItemComponent implements OnInit {

  @Input() event;

  constructor() { }

  ngOnInit() {
  }

}
