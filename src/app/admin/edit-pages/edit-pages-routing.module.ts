import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditPagesComponent} from './edit-pages.component';
import {EditContactsComponent} from './contacts/contacts.component';
import {EditNewsPageComponent} from './news-page/news-page.component';
import {EditPartnersAndSertificatesComponent} from './partners-and-sertificates/partners-and-sertificates.component';
import {EditDocumentationComponent} from './documentation/documentation.component';
import {EditOurLeadershipComponent} from './our-leadership/our-leadership.component';
import {EditAboutCompanyComponent} from './about-company/about-company.component';
import {EditAddNewsComponent} from '../edit-add/edit-add-news/edit-add-news.component';
import {EditAddLeadershipsComponent} from '../edit-add/edit-add-leaderships/edit-add-leaderships.component';
import {EditAddPartnersComponent} from '../edit-add/edit-add-partners/edit-add-partners.component';
import {EditAddConactsComponent} from "../edit-add/edit-add-conacts/edit-add-conacts.component";

const routes: Routes = [
  { path: 'edit-news', component: EditNewsPageComponent},
  { path: 'edit-news/:id', component: EditAddNewsComponent},

  { path: 'edit-our-leadership', component: EditOurLeadershipComponent},
  { path: 'edit-our-leaderships/:id', component: EditAddLeadershipsComponent},

  { path: 'edit-partners', component: EditPartnersAndSertificatesComponent},
  { path: 'edit-partners/:id', component: EditAddPartnersComponent},

  { path: 'edit-contacts', component: EditContactsComponent},
  { path: 'edit-contacts/:id', component: EditAddConactsComponent},

  { path: 'edit-documentation', component: EditDocumentationComponent},
  { path: 'edit-about-company', component: EditAboutCompanyComponent},
];
const rootRouters: Routes = [
  { path: '', component: EditPagesComponent, children: routes  }
]
@NgModule({
  imports: [RouterModule.forChild(rootRouters)],
  exports: [RouterModule]
})
export class EditPagesRoutingModule { }


