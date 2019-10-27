import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {PagesRoutingModule} from './pages-routing.module';
import {AboutCompanyComponent} from './about-company/about-company.component';
import {ContactsComponent} from './contacts/contacts.component';
import {DocumentationComponent} from './documentation/documentation.component';
import {EventsComponent} from './events/events.component';
import {HomeComponent} from './home/home.component';
import {NewsComponent} from './news/news.component';
import {OurLeadershipComponent} from './our-leadership/our-leadership.component';
import {PartnersAndCertificationsComponent} from './partners-and-certifications/partners-and-certifications.component';
import {ProcurementComponent} from './procurement/procurement.component';
import {ProductionComponent} from './production/production.component';
import {ProduktsiyaComponent} from './produktsiya/produktsiya.component';
import {PagesComponent} from './pages.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from '../components/components.module';


@NgModule({
  imports: [
    PagesRoutingModule,
    NgbModule,
    RouterModule,
    FormsModule,
    CommonModule,
    ComponentsModule
  ],
  declarations: [
    PagesComponent,
    AboutCompanyComponent,
    ContactsComponent,
    DocumentationComponent,
    EventsComponent,
    HomeComponent,
    NewsComponent,
    OurLeadershipComponent,
    PartnersAndCertificationsComponent,
    ProcurementComponent,
    ProductionComponent,
    ProduktsiyaComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class PagesModule {
}



