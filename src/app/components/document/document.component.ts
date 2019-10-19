import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.sass']
})
export class DocumentComponent implements OnInit {
  @Input() document;
  constructor() { }

  ngOnInit() {
  }

}
