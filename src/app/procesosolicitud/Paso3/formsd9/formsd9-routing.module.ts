import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Formsd9Page } from './formsd9.page';

const routes: Routes = [
  {
    path: '',
    component: Formsd9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Formsd9PageRoutingModule {}
