import {Component, OnInit} from '@angular/core';
import { events} from "../../data";
import {ActivatedRoute, NavigationStart, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.sass']
})
export class EventsComponent implements OnInit {

  event;
  title;
  prev;
  next;
  constructor(private route: ActivatedRoute, private router: Router) {
    router.events.pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        console.log('vhbkjnlm;,');
        this.ngOnInit();

      });
  }

  ngOnInit() {
    this.title = this.route.snapshot.params.event;
    let count = 0;
    events.forEach((item) => {
      if(this.toTranslit(item.title) === this.title) {
        this.event = item;
        if(count === 0) {
          this.next = events[count+1];
        } else if (count-1 === -1) {
          this.prev = events[count-1];
        } else {
          this.prev = events[count-1];
          this.next = events[count+1];
        }
      }
      count++;
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
