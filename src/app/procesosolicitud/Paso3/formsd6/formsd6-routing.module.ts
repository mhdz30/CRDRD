import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Formsd6Page } from './formsd6.page';

const routes: Routes = [
  {
    path: '',
    component: Formsd6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Formsd6PageRoutingModule {}
