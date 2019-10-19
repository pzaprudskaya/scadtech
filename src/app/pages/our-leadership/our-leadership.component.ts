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
  showNavigationArrows = true;
  showNavigationIndicators = false;
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }

  ngOnInit() {
    this.ourLeadership = leaderships;
  }
}
