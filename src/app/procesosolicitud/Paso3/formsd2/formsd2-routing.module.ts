import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Formsd2Page } from './formsd2.page';

const routes: Routes = [
  {
    path: '',
    component: Formsd2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Formsd2PageRoutingModule {}
