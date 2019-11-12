import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, AbstractControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {HistoryEventsService} from '../../../shared/services/history-events.service';
import {IHistoryEvent} from '../../../shared/models/about-company-page.model';

@Component({
  styleUrls: ['./edit-add-history-event.component.sass'],
  templateUrl: './edit-add-history-event.component.html',
})
export class EditAddHistoryEventComponent implements OnInit {

  historyEventModel = {
    year: [null, [Validators.required]],
    caption: [null, [Validators.required]],
    description: [null, [Validators.required]],
  };
  state: boolean;
  historyEvent = this.fb.group(this.historyEventModel);
  event: IHistoryEvent;

  get f() {
    return this.historyEvent.controls as {
      [K in keyof (this[ 'historyEventModel' ])]: AbstractControl;
    };
  }

  constructor( private fb: FormBuilder,
               private historyEventsService: HistoryEventsService,
               private route: ActivatedRoute ) {
  }

  ngOnInit() {
    if (this.route.snapshot.params.id === 'add') {
      this.state = true;
      this.historyEvent.controls.year.setValue('');
      this.historyEvent.controls.caption.setValue('');
      this.historyEvent.controls.description.setValue('');
    } else {
      this.state = false;
      this.historyEventsService.getHistoryEvent(this.route.snapshot.params.id).subscribe((event: IHistoryEvent) => {
        this.historyEvent.controls.year.setValue(event[0].year);
        this.historyEvent.controls.caption.setValue(event[0].caption);
        this.historyEvent.controls.description.setValue(event[0].description);
      });
    }
  }

  addHistoryEvent() {
    this.historyEvent.markAllAsTouched();

    if (this.historyEvent.invalid) {
      return;
    }
    this.historyEventsService.addHistoryEvent(this.historyEvent.value).subscribe( () => console.log('Add!'));
  }

  updateHistoryEvent() {
    this.historyEvent.markAllAsTouched();

    if (this.historyEvent.invalid) {
      return;
    }
    this.event.year = this.historyEvent.value.year;
    this.event.caption = this.historyEvent.value.caption;
    this.event.description = this.historyEvent.value.description;
    this.historyEventsService.updateHistoryEvent(this.event).subscribe(() => console.log('Update!'));
  }
}

