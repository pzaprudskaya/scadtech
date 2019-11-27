import { Component, OnInit } from '@angular/core';
import { partners } from 'src/app/data';

@Component({
  selector: 'app-partners-and-certifications',
  templateUrl: './partners-and-certifications.component.html',
  styleUrls: ['./partners-and-certifications.component.sass']
})
export class PartnersAndCertificationsComponent implements OnInit {
  headline = 'Партнеры и сертификаты';
  partners;
  constructor() {}

  ngOnInit() {
    this.partners = partners;
  }
}
