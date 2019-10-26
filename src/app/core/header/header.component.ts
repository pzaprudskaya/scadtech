import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.onscroll = function() {
      myFunction();
    };

    const header = document.getElementById('myHeader');
    const sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add('fixed');
      } else {
        header.classList.remove('fixed');
      }
    }
  }

}


