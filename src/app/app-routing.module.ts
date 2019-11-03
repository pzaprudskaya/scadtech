import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/edit-pages/edit-pages.module')
      .then(m => m.EditPagesModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./admin/auth/auth.module')
      .then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


