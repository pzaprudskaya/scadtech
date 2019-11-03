import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AuthComponent } from '../auth/auth.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {EditComponentsModule} from '../edit-components/edit-components.module';
import {RouterModule} from '@angular/router';
import {ComponentsModule} from '../../components/components.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EditAddModule} from '../edit-add/edit-add-pages.module';
import {AuthRoutingModule} from './auth-routing.module';



@NgModule({
  imports: [
    AuthRoutingModule,
    NgbModule,
    RouterModule,
    FormsModule,
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    EditComponentsModule,
    EditAddModule
  ],
  declarations: [
    AuthComponent
  ],
  exports: [
    AuthComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AuthModule {
}
