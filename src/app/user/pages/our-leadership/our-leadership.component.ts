import {Component, OnInit, ViewChild} from '@angular/core';
import {leaderships} from 'src/app/data';
import {NgbCarousel, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-our-leadership',
  templateUrl: './our-leadership.component.html',
  styleUrls: ['./our-leadership.component.sass'],
  providers: [NgbCarouselConfig]
})
export class OurLeadershipComponent implements OnInit {
  headline = 'Наше руководство';
  ourLeadership;
  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  constructor() { }

  ngOnInit() {
    this.ourLeadership = leaderships;
    this.carousel.pause();
  }

}
