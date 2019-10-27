import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditPagesComponent} from './edit-pages.component';
import {EditContactsComponent} from './contacts/contacts.component';
import {EditNewsPageComponent} from './news-page/news-page.component';
import {EditPartnersAndSertificatesComponent} from './partners-and-sertificates/partners-and-sertificates.component';
import {EditDocumentationComponent} from './documentation/documentation.component';
import {EditOurLeadershipComponent} from './our-leadership/our-leadership.component';
import {EditAboutCompanyComponent} from './about-company/about-company.component';

const routes: Routes = [
  { path: 'edit-news', component: EditNewsPageComponent},
  { path: 'edit-contacts', component: EditContactsComponent},
  { path: 'edit-documentation', component: EditDocumentationComponent},
  { path: 'edit-partners', component: EditPartnersAndSertificatesComponent},
  { path: 'edit-our-leadership', component: EditOurLeadershipComponent},
  { path: 'edit-about-company', component: EditAboutCompanyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditPagesRoutingModule { }

