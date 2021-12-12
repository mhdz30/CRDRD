import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Formsd7Page } from './formsd7.page';

const routes: Routes = [
  {
    path: '',
    component: Formsd7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Formsd7PageRoutingModule {}
