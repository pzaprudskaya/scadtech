import {Component, OnInit} from '@angular/core';
import {PartnersPageService} from '../../services/partners-page.service';
import {IPartners} from '../../models/partners-page.model';

@Component({
  selector: 'app-partners-and-sertificates',
  styleUrls: ['./partners-and-sertificates.component.sass'],
  templateUrl: './partners-and-sertificates.component.html',
})
export class EditPartnersAndSertificatesComponent implements OnInit {
  headline = 'Partners and sertificates';
  partners;
  pageSize = 8;
  page = 1;

  constructor(private partnersService: PartnersPageService) {
  }

  ngOnInit() {
    this.partners = [];
    this.partnersService.getPartners().subscribe((leaderships: IPartners[]) => {
      this.partners = leaderships;
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
}
