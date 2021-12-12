import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisconvocatoriasmenuPage } from './misconvocatoriasmenu.page';

const routes: Routes = [
  {
    path: '',
    component: MisconvocatoriasmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisconvocatoriasmenuPageRoutingModule {}
