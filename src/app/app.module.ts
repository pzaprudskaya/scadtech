import {BrowserModule} from '@angular/platform-browser';
import 'hammerjs';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFullpageModule} from '@fullpage/angular-fullpage';
import {EditPagesModule} from './admin/edit-pages/edit-pages.module';
import {HttpClientModule} from '@angular/common/http';
import {EditAddModule} from './admin/edit-add/edit-add-pages.module';
import {AuthModule} from './auth/auth.module';
import {ComponentsModule} from './user/components/components.module';
import {PagesModule} from './user/pages/pages.module';
import {FeedbackWindowComponent} from './user/components/feedback-window/feedback-window.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    EditPagesModule,
    EditAddModule,
    ComponentsModule,
    BrowserAnimationsModule,
    AngularFullpageModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [FeedbackWindowComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
