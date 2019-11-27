import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  @ViewChild('header', { static: false })
  header: ElementRef;

  @ViewChild('fixed', { static: false })
  fixed: ElementRef;

  ngOnInit() {}

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
