import {Component, OnInit, ViewChild} from '@angular/core';
import {IEvent} from './news-page.model';
import {NewsPageService} from './news-page.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-news',
  styleUrls: ['./news-page.component.sass'],
  templateUrl: './news-page.component.html',
})
export class EditNewsPageComponent implements OnInit {
  events: IEvent[];
  addNews = new FormGroup({
    title: new FormControl(''),
    date: new FormControl(''),
    preview: new FormControl(''),
    content: new FormControl(''),
  });
  news: IEvent;

  constructor(private newsService: NewsPageService) {
  }

  ngOnInit() {
    this.events = [];
    this.newsService.getEvents().subscribe((news: IEvent[]) => {
      this.events = news;
    });
  }

  addEvent() {
    debugger;
    this.news.title = this.addNews.get('title').value;
    this.news.date = this.addNews.get('date').value;
    this.news.preview = this.addNews.get('preview').value;
    this.news.content = this.addNews.get('content').value;

    this.newsService.addEvent(this.news).subscribe((addEvent) => {
      this.events.push(addEvent);
    });
  }

  deleteEvent(event) {
    this.events.forEach((item, i) => {
      if (item.id === event.id) {
        this.events.splice(i, 1);
      }
    });
    this.newsService.deleteEvent(event).subscribe(() => console.log('Delete!'));
  }

  updateEvent(event) {
    this.newsService.updateEvent(event).subscribe(() => console.log('Update!'));
  }
}
