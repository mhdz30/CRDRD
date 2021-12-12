import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Formsd11Page } from './formsd11.page';

const routes: Routes = [
  {
    path: '',
    component: Formsd11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Formsd11PageRoutingModule {}
