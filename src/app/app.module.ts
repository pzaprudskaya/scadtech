import {BrowserModule} from '@angular/platform-browser';
import 'hammerjs';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {PagesModule} from "./pages/pages.module";
import {ComponentsModule} from "./components/components.module";
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import {FeedbackWindowComponent} from "./components/feedback-window/feedback-window.component";
import { HistoryItemComponent } from './history-item/history-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    PagesModule,
    ComponentsModule,
    NgxHmCarouselModule
  ],
  providers: [],
  entryComponents: [FeedbackWindowComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
