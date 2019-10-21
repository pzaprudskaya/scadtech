import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {DocumentComponent} from "./document/document.component";
import {ContactComponent} from "./contact/contact.component";
import {EventComponent} from "./event/event.component";
import {AboutComponent} from "./about/about.component";
import {ValuesComponent} from "./values/values.component";
import {PartnerComponent} from "./partner/partner.component";
import {HistoryComponent} from "./history/history.component";
import {ValueComponent} from "./value/value.component";
import {FeedbackWindowComponent} from "./feedback-window/feedback-window.component";
import { HistoryItemComponent } from './history-item/history-item.component';





@NgModule({
  declarations: [
    DocumentComponent,
    ContactComponent,
    EventComponent,
    AboutComponent,
    ValuesComponent,
    PartnerComponent,
    HistoryComponent,
    ValueComponent,
    FeedbackWindowComponent,
    HistoryItemComponent
  ],
  imports: [
    NgbModule,
    RouterModule,
    FormsModule,
    CommonModule,
  ],
  exports: [
    DocumentComponent,
    ContactComponent,
    EventComponent,
    AboutComponent,
    ValuesComponent,
    PartnerComponent,
    HistoryComponent,
    ValueComponent,
    FeedbackWindowComponent,
    HistoryItemComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],


})
export class ComponentsModule {
}
