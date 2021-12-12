import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SangreconsultadaPage } from './sangreconsultada.page';

const routes: Routes = [
  {
    path: '',
    component: SangreconsultadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SangreconsultadaPageRoutingModule {}
