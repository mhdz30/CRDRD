import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormdtosrecPage } from './formdtosrec.page';

const routes: Routes = [
  {
    path: '',
    component: FormdtosrecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormdtosrecPageRoutingModule {}
