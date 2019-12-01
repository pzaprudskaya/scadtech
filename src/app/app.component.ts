import { Component, OnInit } from '@angular/core';
import { ProfileService } from './shared/services/profile.service';
import { IProfile } from './shared/models/profile.model';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.sass' ]
})
export class AppComponent implements OnInit {
  title = 'Компания';

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ) {
  }

  ngOnInit(): void {
    this.profileService.getData().subscribe((profile: IProfile) => {
      document.documentElement.style.setProperty('--color', profile.color);
      document.documentElement.style.setProperty('--logo-image', `url(${profile.image})`);
      document.documentElement.style.setProperty(
        '--background-image',
        `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAABlBMVEUAAACZmZl+9SADAAAAAnRSTlMAM8lDrC4AAAAOSURBVAjXY0AGPCCEDAABkgAZ9NAiqAAAAABJRU5ErkJggg==)`
      );
    });

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) { route = route.firstChild; }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data),
      )
      .subscribe((event) => {
        let title = this.title;
        if (event.title) {
          title += ` - ${event.title}`;
        }
        this.titleService.setTitle(title);
      });
  }
}
