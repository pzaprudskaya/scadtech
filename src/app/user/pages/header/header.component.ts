import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef
} from '@angular/core';
import { IInformation, IProfile } from '../../../shared/models/profile.model';
import { ProfileService } from '../../../shared/services/profile.service';
import { InformationService } from "../../../shared/services/information.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  logo: string;
  email: string;
  phone: string;
  constructor( private  profileService: ProfileService,
               private informationService: InformationService) {}

  @ViewChild('header', { static: false })
  header: ElementRef;

  @ViewChild('fixed', { static: false })
  fixed: ElementRef;

  ngOnInit() {
    this.profileService.getData().subscribe((profile: IProfile) => {
      this.logo = profile.image;
    });
    this.informationService.getInformation().subscribe((inf: IInformation) => {
      this.email = inf.email;
      this.phone = inf.phone;
    });

  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const { offsetHeight } = this.header.nativeElement;
    if (offsetHeight + 20 < window.pageYOffset) {
      this.fixed.nativeElement.classList.add('active');
    } else {
      this.fixed.nativeElement.classList.remove('active');
    }
  }
}
