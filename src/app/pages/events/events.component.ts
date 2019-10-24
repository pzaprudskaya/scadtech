<<<<<<< HEAD
import {Component, OnChanges, OnInit} from '@angular/core';
import {events} from "../../data";
import {ActivatedRoute, NavigationStart, Router} from "@angular/router";
import {filter} from "rxjs/operators";
=======
import { Component, OnInit } from '@angular/core';
import { events } from "../../data";
import { ActivatedRoute, NavigationStart, Router } from "@angular/router";
import { filter } from "rxjs/operators";
>>>>>>> ab97b727502114b544ec114f35c1a73e12e74e64

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: [ './events.component.sass' ]
})
export class EventsComponent implements OnInit{

  event;
  title;

  events;
  currentNews: number;
  newsLength: number;

  prev = '';
  next = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    router.events.pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        this.init();
      });
  }

  ngOnInit() {
<<<<<<< HEAD
    this.title = this.route.snapshot.params.event;
    events.forEach((item, index) => {
      if (this.toTranslit(item.title) === this.title) {
        this.event = item;
        if (index === 0) {
          this.next = events[index + 1].title;
        } else if (index === events.length) {
          this.prev = events[index - 1].title;
        } else {
          this.prev = events[index - 1].title;
          this.next = events[index + 1].title;
        }
      }
    });
=======
    const event = events.filter((el, index) => this.toTranslit(el.title) === this.route.snapshot.params.event);
    this.newsLength = events.length;
    this.currentNews = event[0].id;
    this.events = events;
    this.init();
  }
>>>>>>> ab97b727502114b544ec114f35c1a73e12e74e64

  init() {
    this.title = this.route.snapshot.params.event;
    this.event = events[this.currentNews];
  }

  toTranslit(title: string): string {
    return title.replace(/([а-яё])|([\s_-])|([^a-z\d])/gi,
      function (all, ch, space, words, i) {
        if (space || words) {
          return space ? '-' : '';
        }
        let code = ch.charCodeAt(0),
          index = code == 1025 || code == 1105 ? 0 :
            code > 1071 ? code - 1071 : code - 1039,
          t = [ 'yo', 'a', 'b', 'v', 'g', 'd', 'e', 'zh',
            'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p',
            'r', 's', 't', 'u', 'f', 'h', 'c', 'ch', 'sh',
            'shch', '', 'y', '', 'e', 'yu', 'ya'
          ];
        return t[ index ];
      });
  }
}
