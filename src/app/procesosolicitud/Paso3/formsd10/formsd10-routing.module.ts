import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Formsd10Page } from './formsd10.page';

const routes: Routes = [
  {
    path: '',
    component: Formsd10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Formsd10PageRoutingModule {}
