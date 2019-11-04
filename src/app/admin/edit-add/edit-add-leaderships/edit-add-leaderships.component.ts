import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, AbstractControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ILeadership} from '../../models/leaderships-page.model';
import {LeadershipsPageService} from '../../services/leaderships-page.service';

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
  leadership: ILeadership;

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
      this.leader.controls.name.setValue('');
      this.leader.controls.image.setValue('');
      this.leader.controls.post.setValue('');
    } else {
      this.state = false;
      this.leadershipsService.getLeadership(this.route.snapshot.params.id).subscribe((Leadership: ILeadership) => {
        this.leadership = Leadership[0];
        this.leader.controls.name.setValue(this.leadership.name);
        this.leader.controls.image.setValue(this.leadership.image);
        this.leader.controls.position.setValue(this.leadership.position);
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
    this.leadership.name = this.leader.value.name;
    this.leadership.image = this.leader.value.image;
    this.leadership.position = this.leader.value.position;
    this.leadershipsService.updateLeadership(this.leadership).subscribe(() => console.log('Update!'));
  }
}

