import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass']
})
export class HistoryComponent implements OnInit {



  constructor() { }

  ngOnInit() {
    // const innerWidth = window.innerWidth;
    // this.innerWidth = innerWidth;
    // this.width = innerWidth / 0.6;
    // this.transform = innerWidth / 3.2;
  }

  drag(event) {
    console.log(event);
  }

}
