import {Component, OnInit} from '@angular/core';
import {LeadershipsPageService} from '../../services/leaderships-page.service';
import {IAllLeaderships, ILeadership} from '../../models/leaderships-page.model';

@Component({
  selector: 'app-edit-our-leadership',
  styleUrls: ['./our-leadership.component.sass'],
  templateUrl: './our-leadership.component.html',
})
export class EditOurLeadershipComponent implements OnInit {
  headline = 'Наше руководство';
  leaderships;
  countLeaderships;
  pageSize = 8;
  page = 1;

  constructor(private leadershipService: LeadershipsPageService) { }

  ngOnInit() {
    this.leaderships = [];
    this.leadershipService.getLeaderships(this.pageSize, this.pageSize * (this.page - 1)).subscribe((leaderships: IAllLeaderships) => {
      this.countLeaderships = leaderships.count;
      this.leaderships = leaderships.data;
    });
  }

  deleteItem(leader) {
    this.leaderships.forEach((item, i) => {
      if (item._id === leader._id) {
        this.leaderships.splice(i, 1);
      }
    });
    this.leadershipService.deleteLeadership(leader).subscribe(() => console.log('Delete!'));
  }

  changePage(page) {
    this.leadershipService.getLeaderships(this.pageSize, this.pageSize * (page - 1)).subscribe((leaderships: IAllLeaderships) => {
      this.leaderships = leaderships.data;
    });
  }
}
