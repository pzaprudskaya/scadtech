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
<<<<<<< HEAD
import { AboutUsComponent } from './about-us/about-us.component';
import { ScadTechComponent } from './scad-tech/scad-tech.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProcessesComponent } from './processes/processes.component';
=======
import { EventItemComponent } from './event-item/event-item.component';
>>>>>>> ab97b727502114b544ec114f35c1a73e12e74e64





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
<<<<<<< HEAD
    AboutUsComponent,
    ScadTechComponent,
    ProjectsComponent,
    ProcessesComponent
=======
    EventItemComponent
>>>>>>> ab97b727502114b544ec114f35c1a73e12e74e64
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
<<<<<<< HEAD
    AboutUsComponent,
    ScadTechComponent,
    ProjectsComponent,
    ProcessesComponent
=======
    EventItemComponent
>>>>>>> ab97b727502114b544ec114f35c1a73e12e74e64
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],


})
export class ComponentsModule {
}
