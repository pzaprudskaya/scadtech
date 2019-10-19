import { Component, OnInit } from '@angular/core';
import { events} from "../../data";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.sass']
})
export class EventsComponent implements OnInit {
  event;
  title;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.title = this.route.snapshot.params.event;
    events.forEach((item) => {
      if(this.toTranslit(item.title) === this.title) {
        this.event = item;
      }
    });

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
          t = ['yo', 'a', 'b', 'v', 'g', 'd', 'e', 'zh',
            'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p',
            'r', 's', 't', 'u', 'f', 'h', 'c', 'ch', 'sh',
            'shch', '', 'y', '', 'e', 'yu', 'ya'
          ];
        return t[index];
      });
  }
}
