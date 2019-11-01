import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {EditPagesComponent} from './edit-pages.component';
import {EditContactsComponent} from './contacts/contacts.component';
import {EditPartnersAndSertificatesComponent} from './partners-and-sertificates/partners-and-sertificates.component';
import {EditOurLeadershipComponent} from './our-leadership/our-leadership.component';
import {EditDocumentationComponent} from './documentation/documentation.component';
import {EditAboutCompanyComponent} from './about-company/about-company.component';
import {EditPagesRoutingModule} from './edit-pages-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from '../../components/components.module';
import {EditorModule} from '@tinymce/tinymce-angular';
import {TestPageComponent} from './test-page/test-page.component';
import {EditNewsPageComponent} from './news-page/news-page.component';


@NgModule({
  imports: [
    EditPagesRoutingModule,
    NgbModule,
    RouterModule,
    FormsModule,
    CommonModule,
    ComponentsModule,
    EditorModule,
    ReactiveFormsModule,
  ],
  declarations: [
    EditPagesComponent,
    EditAboutCompanyComponent,
    EditContactsComponent,
    EditDocumentationComponent,
    EditNewsPageComponent,
    EditOurLeadershipComponent,
    EditPartnersAndSertificatesComponent,
    TestPageComponent
  ],
  exports: [
    EditPagesComponent,
    EditAboutCompanyComponent,
    EditContactsComponent,
    EditDocumentationComponent,
    EditNewsPageComponent,
    TestPageComponent,
    EditOurLeadershipComponent,
    EditPartnersAndSertificatesComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class EditPagesModule {
}
