import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsreceptorPage } from './asreceptor.page';

const routes: Routes = [
  {
    path: '',
    component: AsreceptorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsreceptorPageRoutingModule {}
