import { Component, OnInit } from '@angular/core';
import { values } from '../../data';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.sass']
})
export class ValuesComponent implements OnInit {
  values;
  constructor() { }

  ngOnInit() {
    this.values = values;
  }

}
