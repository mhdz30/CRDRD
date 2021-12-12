import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Formsd5Page } from './formsd5.page';

const routes: Routes = [
  {
    path: '',
    component: Formsd5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Formsd5PageRoutingModule {}
