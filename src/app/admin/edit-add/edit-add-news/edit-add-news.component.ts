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
      this.addNews.reset();
    } else {
      this.state = false;
      this.newsService.getEvent(this.route.snapshot.params.id).subscribe((news: IEvent) => {
        this.addNews.reset(news[0]);
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
    debugger;
    this.addNews.markAllAsTouched();
    if (this.addNews.invalid) {
      return;
    }
    this.newsService.updateEvent(this.route.snapshot.params.id, this.addNews.value).subscribe((event) => console.log('Update!'));
  }
}

