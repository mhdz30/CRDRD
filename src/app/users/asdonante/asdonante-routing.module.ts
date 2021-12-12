import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsdonantePage } from './asdonante.page';

const routes: Routes = [
  {
    path: '',
    component: AsdonantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsdonantePageRoutingModule {}
