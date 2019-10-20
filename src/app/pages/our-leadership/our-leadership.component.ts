import { Component, OnInit } from '@angular/core';
import {leaderships} from "../../data";
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-our-leadership',
  templateUrl: './our-leadership.component.html',
  styleUrls: ['./our-leadership.component.sass'],
  providers: [NgbCarouselConfig]
})
export class OurLeadershipComponent implements OnInit {
  ourLeadership;
  follow = true;
  enablePan = true;

  index = 8;
  speed = 3000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars = '123456789'.split('').map((x, i) => {
    const num = i;
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: `https://picsum.photos/600/400/?${num}`,
      title: `${num}`
    };
  });
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }

  ngOnInit() {
    this.ourLeadership = leaderships;
  }
  push() {
    this.avatars.push(
      {
        url: `https://picsum.photos/600/400/?${this.avatars.length + 1}`,
        title: `${this.avatars.length + 1}`
      }
    );
  }

  remove() {
    this.avatars.splice(this.avatars.length - 1, 1);
  }


  indexChanged(index) {
    console.log(index);
  }

  toggleDirection($event) {
    this.direction = this.directionToggle ? 'right' : 'left';
  }

  a(i) {
    console.log(i);
  }

}
