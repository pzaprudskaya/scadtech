import {Component, OnInit} from '@angular/core';
import {LeadershipsPageService} from '../../services/leaderships-page.service';
import {ILeadership} from '../../models/leaderships-page.model';

@Component({
  selector: 'app-edit-our-leadership',
  styleUrls: ['./our-leadership.component.sass'],
  templateUrl: './our-leadership.component.html',
})
export class EditOurLeadershipComponent implements OnInit {
  headline = 'Наше руководство';
  leaderships;
  pageSize = 8;
  page = 1;

  constructor(private leadershipService: LeadershipsPageService) { }

  ngOnInit() {
    this.leaderships = [];
    this.leadershipService.getLeaderships().subscribe((leaderships: ILeadership[]) => {
      this.leaderships = leaderships;
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
}
