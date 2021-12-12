import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Formsd4Page } from './formsd4.page';

const routes: Routes = [
  {
    path: '',
    component: Formsd4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Formsd4PageRoutingModule {}
