import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PagesModule } from "./pages/pages.module";
import { ComponentsModule } from "./components/components.module";
import { FeedbackWindowComponent } from "./components/feedback-window/feedback-window.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    PagesModule,
    ComponentsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  entryComponents: [ FeedbackWindowComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
