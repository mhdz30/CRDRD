import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequisitosPage } from './requisitos.page';

const routes: Routes = [
  {
    path: '',
    component: RequisitosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequisitosPageRoutingModule {}
