import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Formsd8Page } from './formsd8.page';

const routes: Routes = [
  {
    path: '',
    component: Formsd8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Formsd8PageRoutingModule {}
