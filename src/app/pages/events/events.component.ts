import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewsPageService} from '../../admin/services/news-page.service';
import {IEvent} from '../../admin/models/news-page.model';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: [ './events.component.sass' ]
})
export class EventsComponent implements OnInit {

  event;
  id: string;

  constructor(private route: ActivatedRoute, private newsService: NewsPageService) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.event;
    this.newsService.getEvent(this.id).subscribe((event: IEvent) => {
      this.event = event[0];
    });
  }
}
