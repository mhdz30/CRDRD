import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsangrePage } from './consangre.page';

const routes: Routes = [
  {
    path: '',
    component: ConsangrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsangrePageRoutingModule {}
