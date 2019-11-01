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
  state: boolean;
  events: IEvent[];
  addNews = this.fb.group(this.newsModel);
  event: IEvent;

  get f() {
    return this.addNews.controls as {
      [K in keyof (this[ 'newsModel' ])]: AbstractControl;
    };
  }

  constructor( private fb: FormBuilder,
               private newsService: NewsPageService,
               private route: ActivatedRoute ) {
  }

  ngOnInit() {
    if (this.route.snapshot.params.id === 'add') {
      this.state = true;
      this.addNews.controls.title.setValue('');
      this.addNews.controls.date.setValue('');
      this.addNews.controls.preview.setValue('');
      this.addNews.controls.content.setValue('');
    } else {
      this.state = false;
      this.newsService.getEvent(this.route.snapshot.params.id).subscribe((news: IEvent) => {
        this.event = news[0];
        this.addNews.controls.title.setValue(this.event.title);
        this.addNews.controls.date.setValue(this.event.date);
        this.addNews.controls.preview.setValue(this.event.preview);
        this.addNews.controls.content.setValue(this.event.content);
      });
    }
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

  updateEvent() {

    this.addNews.markAllAsTouched();

    if (this.addNews.invalid) {
      return;
    }
    this.event.title = this.addNews.value.title;
    this.event.date = this.addNews.value.date;
    this.event.preview = this.addNews.value.preview;
    this.event.content = this.addNews.value.content;
    this.newsService.updateEvent(this.event).subscribe(() => console.log('Update!'));
  }
}

