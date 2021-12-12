import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginoptPage } from './loginopt.page';

const routes: Routes = [
  {
    path: '',
    component: LoginoptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginoptPageRoutingModule {}
