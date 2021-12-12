import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewconPage } from './newcon.page';

const routes: Routes = [
  {
    path: '',
    component: NewconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewconPageRoutingModule {}
