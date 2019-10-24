import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageComponent} from './core/page/page.component';
import {AboutCompanyComponent} from './pages/about-company/about-company.component';
import {ContactsComponent} from './pages/contacts/contacts.component';
import {NewsComponent} from './pages/news/news.component';
import {PartnersAndCertificationsComponent} from './pages/partners-and-certifications/partners-and-certifications.component';
import {OurLeadershipComponent} from './pages/our-leadership/our-leadership.component';
import {ProduktsiyaComponent} from './pages/produktsiya/produktsiya.component';
import {ProcurementComponent} from './pages/procurement/procurement.component';
import {ProductionComponent} from './pages/production/production.component';
import {DocumentationComponent} from './pages/documentation/documentation.component';
import {EventsComponent} from './pages/events/events.component';
import {HomeComponent} from './pages/home/home.component';

const itemRoutes: Routes = [
  { path: 'about', component: AboutCompanyComponent},
  { path: 'production', component: ProductionComponent},
  { path: 'documentation', component: DocumentationComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'about/news', component: NewsComponent},
  { path: 'about/news/:event', component: EventsComponent},
  { path: 'about/partners-and-certifications', component: PartnersAndCertificationsComponent},
  { path: 'about/our-leadership', component: OurLeadershipComponent},
  { path: 'production/produktsiya-', component: ProduktsiyaComponent},
  { path: 'production/procurement', component: ProcurementComponent},
  { path: '', component: HomeComponent},
];
const routes: Routes = [
  { path: '', component: PageComponent, children: itemRoutes},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


