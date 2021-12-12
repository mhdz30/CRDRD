import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormdtosdonPage } from './formdtosdon.page';

const routes: Routes = [
  {
    path: '',
    component: FormdtosdonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormdtosdonPageRoutingModule {}
