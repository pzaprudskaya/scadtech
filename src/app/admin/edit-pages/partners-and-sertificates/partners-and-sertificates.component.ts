import {Component, OnInit} from '@angular/core';
import {PartnersPageService} from '../../../shared/services/partners-page.service';
import {IAllPartners} from '../../../shared/models/partners-page.model';

@Component({
  selector: 'app-partners-and-sertificates',
  styleUrls: ['./partners-and-sertificates.component.sass'],
  templateUrl: './partners-and-sertificates.component.html',
})
export class EditPartnersAndSertificatesComponent implements OnInit {
  headline = 'Партнеры и сертификаты';
  partners;
  countPartners;
  pageSize = 6;
  page = 1;

  constructor(private partnersService: PartnersPageService) {
  }

  ngOnInit() {
    this.partners = [];
    this.partnersService.getPartners(this.pageSize, this.pageSize * (this.page - 1)).subscribe((partners: IAllPartners) => {
      this.countPartners = partners.count;
      this.partners = partners.data;
    });
  }

  deletePartner(partner) {
    this.partners.forEach((item, i) => {
      if (item._id === partner._id) {
        this.partners.splice(i, 1);
      }
    });
    this.partnersService.deletePartner(partner).subscribe(() => console.log('Delete!'));
  }
  changePage(page) {
    this.partnersService.getPartners(this.pageSize, this.pageSize * (page - 1)).subscribe((partners: IAllPartners) => {
      this.countPartners = partners.count;
      this.partners = partners.data;
    });
  }
}
