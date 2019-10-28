import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {EditPagesComponent} from './edit-pages.component';
import {EditContactsComponent} from './contacts/contacts.component';
import {EditPartnersAndSertificatesComponent} from './partners-and-sertificates/partners-and-sertificates.component';
import {EditOurLeadershipComponent} from './our-leadership/our-leadership.component';
import {EditDocumentationComponent} from './documentation/documentation.component';
import {EditNewsPageComponent} from './news-page/news-page.component';
import {EditAboutCompanyComponent} from './about-company/about-company.component';
import {EditPagesRoutingModule} from './edit-pages-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from '../../components/components.module';
import {EditorModule} from "@tinymce/tinymce-angular";


@NgModule({
  imports: [
    EditPagesRoutingModule,
    NgbModule,
    RouterModule,
    FormsModule,
    CommonModule,
    ComponentsModule,
    EditorModule,
  ],
  declarations: [
    EditPagesComponent,
    EditAboutCompanyComponent,
    EditContactsComponent,
    EditDocumentationComponent,
    EditNewsPageComponent,
    EditOurLeadershipComponent,
    EditPartnersAndSertificatesComponent
  ],
  exports: [
    EditPagesComponent,
    EditAboutCompanyComponent,
    EditContactsComponent,
    EditDocumentationComponent,
    EditNewsPageComponent,
    EditOurLeadershipComponent,
    EditPartnersAndSertificatesComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class EditPagesModule {
}
