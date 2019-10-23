import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {PageComponent} from './page/page.component';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ComponentsModule} from "../components/components.module";
import {BlockComponent} from "./block/block.component";






@NgModule({
  declarations: [
    PageComponent,
    HeaderComponent,
    FooterComponent,
    BlockComponent
  ],
  imports: [
    NgbModule,
    RouterModule,
    FormsModule,
    CommonModule,
    ComponentsModule
  ],
  exports: [
    PageComponent,
    HeaderComponent,
    FooterComponent,
    BlockComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],


})
export class CoreModule {
}
