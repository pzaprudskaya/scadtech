import { Component, OnInit } from '@angular/core';
import {documents} from 'src/app/data';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.sass']
})
export class DocumentationComponent implements OnInit {
  headline = 'Разрешительная документация';
  documents;
  constructor() { }

  ngOnInit() {
    this.documents = documents;
  }

}
