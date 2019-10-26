import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DragDropModule } from '@angular/cdk/drag-drop';

import { DocumentComponent } from "./document/document.component";
import { ContactComponent } from "./contact/contact.component";
import { EventComponent } from "./event/event.component";
import { AboutComponent } from "./about/about.component";
import { ValuesComponent } from "./values/values.component";
import { PartnerComponent } from "./partner/partner.component";
import { HistoryComponent } from "./history/history.component";
import { ValueComponent } from "./value/value.component";
import { FeedbackWindowComponent } from "./feedback-window/feedback-window.component";
import { HistoryItemComponent } from './history-item/history-item.component';
import {FileComponent} from "./file/file.component";
import {HeadlineComponent} from "./headline/headline.component";
import {ProcessesComponent} from "./processes/processes.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ScadTechComponent} from "./scad-tech/scad-tech.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {PopupComponent} from "./popup/popup.component";
import {EventItemComponent} from "./event-item/event-item.component";





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
    HistoryItemComponent,
    FileComponent,
    HeadlineComponent,
    AboutUsComponent,
    ScadTechComponent,
    ProjectsComponent,
    ProcessesComponent,
    PopupComponent,
    EventItemComponent
  ],
  imports: [
    NgbModule,
    RouterModule,
    FormsModule,
    CommonModule,
    DragDropModule,
  ],
  exports: [
    DocumentComponent,
    HeadlineComponent,
    ContactComponent,
    EventComponent,
    AboutComponent,
    ValuesComponent,
    PartnerComponent,
    HistoryComponent,
    ValueComponent,
    FeedbackWindowComponent,
    HistoryItemComponent,
    FileComponent,
    AboutUsComponent,
    ScadTechComponent,
    ProjectsComponent,
    ProcessesComponent,
    PopupComponent,
    EventItemComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],


})
export class ComponentsModule {
}
