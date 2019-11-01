import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, AbstractControl} from '@angular/forms';
import {IEvent} from '../../models/news-page.model';
import {NewsPageService} from '../../services/news-page.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-test-news',
  styleUrls: ['./test-page.component.sass'],
  templateUrl: './test-page.component.html',
})
export class TestPageComponent implements OnInit {

  newsModel = {
    title: [null, [Validators.required]],
    date: [null, [Validators.required]],
    preview: [null, [Validators.required]],
    content: ['<p>This is the initial content of the editor</p>', [Validators.required]],
  };

  events: IEvent[];
  addNews = this.fb.group(this.newsModel);
  event: IEvent;

  get f() {
    return this.addNews.controls as {
      [K in keyof (this[ 'newsModel' ])]: AbstractControl;
    };
  }

  constructor(
    private fb: FormBuilder,
    private newsService: NewsPageService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {

    this.events = [];
    this.newsService.getEvents().subscribe((events: IEvent[]) => {
      this.events = events;
      events.forEach((item) => {
        if (item.title === this.route.snapshot.params.id) {
          this.addNews.controls.title.value(item.title);
          this.addNews.controls.date.value(item.date);
          this.addNews.controls.preview.value(item.preview);
          this.addNews.controls.content.value(item.content);
          debugger;
        }
      });
    });
    /*
    this.newsService.getEvent(this.route.snapshot.params.id).subscribe((news: IEvent) => {
      this.event = news;
      this.addNews.controls.title.value(this.event.title);
      this.addNews.controls.date.value(this.event.date);
      this.addNews.controls.preview.value(this.event.preview);
      this.addNews.controls.content.value(this.event.content);
    });

    */
  }

  addEvent() {
    this.addNews.markAllAsTouched();

    if (this.addNews.invalid) {
      return;
    }
    this.newsService.addEvent(this.addNews.value).subscribe((addEvent) => {
      this.events.push(addEvent);
    });
  }

  updateEvent(event) {
    this.addNews.markAllAsTouched();

    if (this.addNews.invalid) {
      return;
    }
    this.newsService.updateEvent(event).subscribe(() => console.log('Update!'));
  }
}

