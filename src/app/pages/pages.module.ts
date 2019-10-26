import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ComponentsModule} from '../components/components.module';

import {AboutCompanyComponent} from './about-company/about-company.component';
import {ContactsComponent} from './contacts/contacts.component';
import {NewsComponent} from './news/news.component';
import {PartnersAndCertificationsComponent} from './partners-and-certifications/partners-and-certifications.component';
import {OurLeadershipComponent} from './our-leadership/our-leadership.component';
import {ProduktsiyaComponent} from './produktsiya/produktsiya.component';
import {ProcurementComponent} from './procurement/procurement.component';
import {ProductionComponent} from './production/production.component';
import {DocumentationComponent} from './documentation/documentation.component';
import {EventsComponent} from './events/events.component';
import { HomeComponent } from './home/home.component';
import {AngularFullpageModule} from '@fullpage/angular-fullpage';


@NgModule({
  declarations: [
    AboutCompanyComponent,
    ContactsComponent,
    NewsComponent,
    PartnersAndCertificationsComponent,
    OurLeadershipComponent,
    ProduktsiyaComponent,
    ProcurementComponent,
    ProductionComponent,
    DocumentationComponent,
    EventsComponent,
    HomeComponent
  ],
  imports: [
    NgbModule,
    RouterModule,
    FormsModule,
    CommonModule,
    ComponentsModule,
    AngularFullpageModule
  ],
  exports: [
    AboutCompanyComponent,
    ContactsComponent,
    NewsComponent,
    PartnersAndCertificationsComponent,
    OurLeadershipComponent,
    ProduktsiyaComponent,
    ProcurementComponent,
    ProductionComponent,
    DocumentationComponent,
    EventsComponent,
    HomeComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],


})
export class PagesModule {
}
