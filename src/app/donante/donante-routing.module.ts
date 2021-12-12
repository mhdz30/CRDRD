import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonantePage } from './donante.page';

const routes: Routes = [
  {
    path: '',
    component: DonantePage
  },
  {
    path: 'requisitos',
    loadChildren: () => import('./requisitos/requisitos.module').then( m => m.RequisitosPageModule)
  },
  {
    path: 'misdonaciones',
    loadChildren: () => import('./misdonaciones/misdonaciones.module').then( m => m.MisdonacionesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonantePageRoutingModule {}
