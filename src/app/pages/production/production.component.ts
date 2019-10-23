import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.sass']
})
export class ProductionComponent implements OnInit {
  headline = 'Продукция';
  constructor() { }

  ngOnInit() {
  }

}
