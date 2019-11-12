import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, AbstractControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {LeadershipsPageService} from '../../../shared/services/leaderships-page.service';
import {ILeadership} from '../../../shared/models/leaderships-page.model';

@Component({
  styleUrls: ['./edit-add-leaderships.component.sass'],
  templateUrl: './edit-add-leaderships.component.html',
})
export class EditAddLeadershipsComponent implements OnInit {

  leaderModel = {
    name: [null, [Validators.required]],
    position: [null, [Validators.required]],
    image: [null, [Validators.required]],
  };
  state: boolean;
  leaderships: ILeadership[];
  leader = this.fb.group(this.leaderModel);

  get f() {
    return this.leader.controls as {
      [K in keyof (this[ 'leaderModel' ])]: AbstractControl;
    };
  }

  constructor( private fb: FormBuilder,
               private leadershipsService: LeadershipsPageService,
               private route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.leaderships = [];
    if (this.route.snapshot.params.id === 'add') {
      this.state = true;
      this.leader.reset();
    } else {
      this.state = false;
      this.leadershipsService.getLeadership(this.route.snapshot.params.id).subscribe((leadership: ILeadership) => {
        this.leader.reset(leadership[0]);
      });
    }
  }

  addLeader() {
    this.leader.markAllAsTouched();
    if (this.leader.invalid) {
      return;
    }
    this.leadershipsService.addLeadership(this.leader.value).subscribe((leader) => {
      this.leaderships.push(leader);
    });
  }

  updateLeader() {
    this.leader.markAllAsTouched();
    if (this.leader.invalid) {
      return;
    }
    this.leadershipsService.updateLeadership(this.route.snapshot.params.id, this.leader.value).subscribe(() => console.log('Update!'));
  }
}

