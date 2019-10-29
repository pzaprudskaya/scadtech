import { Component, OnInit, ViewChild } from '@angular/core';
import { IEvent } from './news-page.model';
import { NewsPageService } from './news-page.service';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-edit-news',
  styleUrls: [ './news-page.component.sass' ],
  templateUrl: './news-page.component.html',
})
export class EditNewsPageComponent implements OnInit {

  newsModel = {
    title: [ null, [ Validators.required ] ],
    date: [ null, [ Validators.required ] ],
    preview: [ null, [ Validators.required ] ],
    content: [ '<p>This is the initial content of the editor</p>', [ Validators.required ] ],
  };


  events: IEvent[];
  addNews = this.fb.group(this.newsModel);
  news: IEvent;


  get f() {
    return this.addNews.controls as {
      [ K in keyof (this[ 'newsModel' ]) ]: AbstractControl;
    };
  }

  constructor(
    private fb: FormBuilder,
    private newsService: NewsPageService
  ) {
  }

  ngOnInit() {
    this.events = [];
    this.newsService.getEvents().subscribe((news: IEvent[]) => {
      this.events = news;
    });
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
