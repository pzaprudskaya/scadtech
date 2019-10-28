import {Component, OnInit, ViewChild} from '@angular/core';
import {IEvent} from './news-page.model';
import {NewsPageService} from './news-page.service';

@Component({
  selector: 'app-edit-news',
  styleUrls: ['./news-page.component.sass'],
  templateUrl: './news-page.component.html',
})
export class EditNewsPageComponent implements OnInit {
  events: IEvent[];

  constructor(private newsService: NewsPageService) { }

  ngOnInit() {
    this.events = [];
    this.newsService.getEvents().subscribe((news: IEvent[]) => {
      this.events = news;
    });
  }

  addEvent() {

    const obj = {
      title: (document.getElementById('title') as HTMLInputElement).value,
      date: (document.getElementById('date') as HTMLInputElement).value,
      preview: (document.getElementById('preview') as HTMLInputElement).value,
      content: 'DNC;SNCL;S',
    };
    this.newsService.addEvent(obj).subscribe((addEvent) => {
      debugger;
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
