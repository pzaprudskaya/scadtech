import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { FeedbackWindowComponent } from './components/feedback-window/feedback-window.component';
import {AngularFullpageModule} from '@fullpage/angular-fullpage';
import {EditPagesModule} from './admin/edit-pages/edit-pages.module';
import { HttpClientModule } from '@angular/common/http';
import {EditAddModule} from './admin/edit-add/edit-add-pages.module';
import {AuthModule} from './admin/auth/auth.module';

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
  entryComponents: [ FeedbackWindowComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
