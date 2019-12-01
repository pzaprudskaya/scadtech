import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { EventsComponent } from './events/events.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { OurLeadershipComponent } from './our-leadership/our-leadership.component';
import { NewsComponent } from './news/news.component';
import { ProduktsiyaComponent } from './produktsiya/produktsiya.component';
import { ProductionComponent } from './production/production.component';
import { PartnersAndCertificationsComponent } from './partners-and-certifications/partners-and-certifications.component';
import { ProcurementComponent } from './procurement/procurement.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: 'about', component: AboutCompanyComponent, data: { title: 'About' } },
  { path: 'production', component: ProductionComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'about/news', component: NewsComponent },
  { path: 'about/news/:event', component: EventsComponent },
  {
    path: 'about/partners-and-certifications',
    component: PartnersAndCertificationsComponent
  },
  { path: 'about/our-leadership', component: OurLeadershipComponent },
  { path: 'production/:product', component: ProduktsiyaComponent },
  // { path: 'production/procurement', component: ProcurementComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }
];

const rootRouter: Routes = [
  { path: '', component: PagesComponent, children: routes }
];
@NgModule({
  imports: [RouterModule.forChild(rootRouter)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
