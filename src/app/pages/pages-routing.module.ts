import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutCompanyComponent} from './about-company/about-company.component';
import {EventsComponent} from './events/events.component';
import {DocumentationComponent} from './documentation/documentation.component';
import {HomeComponent} from './home/home.component';
import {ContactsComponent} from './contacts/contacts.component';
import {OurLeadershipComponent} from './our-leadership/our-leadership.component';
import {NewsComponent} from './news/news.component';
import {ProduktsiyaComponent} from './produktsiya/produktsiya.component';
import {ProductionComponent} from './production/production.component';
import {PartnersAndCertificationsComponent} from './partners-and-certifications/partners-and-certifications.component';
import {ProcurementComponent} from './procurement/procurement.component';


const routes: Routes = [
  { path: 'about', component: AboutCompanyComponent},
  { path: 'production', component: ProductionComponent},
  { path: 'documentation', component: DocumentationComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'about/edit-news', component: NewsComponent},
  { path: 'about/edit-news/:event', component: EventsComponent},
  { path: 'about/partners-and-certifications', component: PartnersAndCertificationsComponent},
  { path: 'about/our-leadership', component: OurLeadershipComponent},
  { path: 'production/produktsiya-', component: ProduktsiyaComponent},
  { path: 'production/procurement', component: ProcurementComponent},
  { path: '', component: HomeComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }


