import { Component, OnInit } from '@angular/core';
import { NewsPageService } from '../../services/news-page.service';
import { IEvent } from '../../models/news-page.model';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.sass']
})
export class EditNewsPageComponent implements OnInit {
  headline = 'Новости';
  events;
  pageSize = 8;
  page = 1;
  constructor(private newsService: NewsPageService) { }

  ngOnInit() {
    this.events = [];
    this.newsService.getEvents().subscribe((news: IEvent[]) => {
      this.events = news;
    });
  }

  deleteItem(event) {
    this.events.forEach((item, i) => {
      if (item._id === event._id) {
        this.events.splice(i, 1);
      }
    });
    this.newsService.deleteEvent(event).subscribe(() => console.log('Delete!'));
  }
}
