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
  imageURL: any;
  imagePreview: ArrayBuffer | string;

  newsModel = {
    title: [null, [Validators.required]],
    date: [null, [Validators.required]],
    previewImage: [null, []],
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
    if (this.route.snapshot.params.id === 'add') {
      this.state = true;
    } else {
      this.state = false;
      this.newsService.getEvent(this.route.snapshot.params.id).subscribe((news: IEvent) => {
        Object.keys(this.f).forEach(key => this.f[key].setValue(news[key]));
      });
    }
  }

  addEvent() {
    this.addNews.markAllAsTouched();
    if (this.addNews.invalid || !this.imageURL) {
      return;
    }
    const formData = new FormData();
    formData.append('image', this.imageURL);
    this.newsService.addEvent(this.addNews.value).subscribe((news) => {
      this.newsService.addImage(news._id, formData).subscribe(() => console.log('Add Image!'));
    });
  }

  updateEvent() {
    if (this.addNews.invalid) {
      return;
    }
    this.addNews.markAllAsTouched();
    if (this.imageURL) {
      const formData = new FormData();
      formData.append('image', this.imageURL);
      return this.newsService.addImage(this.route.snapshot.params.id, formData)
        .subscribe((e) => {
          this.addNews.controls.previewImage.setValue(e.previewImage);
          this.newsService.updateEvent(this.route.snapshot.params.id, this.addNews.value).subscribe(() => console.log(''));
        });
    }
    this.newsService.updateEvent(this.route.snapshot.params.id, this.addNews.value).subscribe(() => console.log(''));


  }

  changeValue(event) {
    const file = (event.target as HTMLInputElement).files[ 0 ];
    this.imageURL = file;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = file => {
      this.imagePreview = reader.result;
    };
  }
}

