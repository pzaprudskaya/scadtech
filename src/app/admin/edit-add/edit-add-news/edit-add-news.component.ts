import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, AbstractControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from '../../../shared/models/news-page.model';
import {NewsPageService} from '../../../shared/services/news-page.service';

@Component({
  styleUrls: ['./edit-add-news.component.sass'],
  templateUrl: './edit-add-news.component.html',
})
export class EditAddNewsComponent implements OnInit {

  newsModel = {
    title: [null, [Validators.required]],
    date: [null, [Validators.required]],
    previewImage: [null],
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
    this.events = [];
    if (this.route.snapshot.params.id === 'add') {
      this.state = true;
      this.addNews.controls.title.setValue('');
      this.addNews.controls.date.setValue('');
      this.addNews.controls.previewImage.setValue('');
      this.addNews.controls.preview.setValue('');
      this.addNews.controls.content.setValue('');
    } else {
      this.state = false;
      this.newsService.getEvent(this.route.snapshot.params.id).subscribe((news: IEvent) => {
        this.event = news[0];
        this.addNews.controls.title.setValue(this.event.title);
        this.addNews.controls.date.setValue(this.event.date);
        this.addNews.controls.previewImage.setValue(this.event.previewImage);
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
    this.event.previewImage = this.addNews.value.previewImage;
    this.event.preview = this.addNews.value.preview;
    this.event.content = this.addNews.value.content;
    this.newsService.updateEvent(this.event).subscribe((event) => console.log('Update!'));
  }
}

