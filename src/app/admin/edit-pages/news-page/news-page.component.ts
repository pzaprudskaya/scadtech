import { Component, OnInit } from '@angular/core';
import { NewsPageService } from '../../../shared/services/news-page.service';
import { IAllEvents, IEvent } from '../../../shared/models/news-page.model';

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
  countEvents;
  constructor(private newsService: NewsPageService) {}

  ngOnInit() {
    this.events = [];
    this.newsService
      .getEvents(this.pageSize, this.pageSize * (this.page - 1))
      .subscribe((news: IAllEvents) => {
        this.countEvents = news.count;
        this.events = news.data;
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

  changePage(page) {
    this.newsService
      .getEvents(this.pageSize, this.pageSize * (page - 1))
      .subscribe((news: IAllEvents) => {
        this.events = news.data;
      });
  }
}
