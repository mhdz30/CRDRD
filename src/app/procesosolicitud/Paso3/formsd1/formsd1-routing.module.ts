import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Formsd1Page } from './formsd1.page';

const routes: Routes = [
  {
    path: '',
    component: Formsd1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Formsd1PageRoutingModule {}
