import {Component, OnInit} from '@angular/core';
import {ProfileService} from './shared/services/profile.service';
import {IProfile} from './shared/models/profile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'site';
  // #4682B4 - color
  // data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAABlBMVEUAAACZmZl+9SADAAAAAnRSTlMAM8lDrC4AAAAOSURBVAjXY0AGPCCEDAABkgAZ9NAiqAAAAABJRU5ErkJggg== - background
  constructor(private profileService: ProfileService) {}
  ngOnInit(): void {
    document.documentElement.style.setProperty('--color', '#4682B4');
    document.documentElement.style.setProperty('--background-image', `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAABlBMVEUAAACZmZl+9SADAAAAAnRSTlMAM8lDrC4AAAAOSURBVAjXY0AGPCCEDAABkgAZ9NAiqAAAAABJRU5ErkJggg==)`);

   /* this.profileService.getData().subscribe((profile: IProfile) => {
      document.documentElement.style.setProperty('--color', profile.color);
      document.documentElement.style.setProperty('--background-image', `url(${profile.background})`);
    });*/
  }

}
