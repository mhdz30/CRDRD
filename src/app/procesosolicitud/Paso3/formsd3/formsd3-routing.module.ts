import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Formsd3Page } from './formsd3.page';

const routes: Routes = [
  {
    path: '',
    component: Formsd3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Formsd3PageRoutingModule {}
