import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConvocatoriasmainPage } from './convocatoriasmain.page';

const routes: Routes = [
  {
    path: '',
    component: ConvocatoriasmainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvocatoriasmainPageRoutingModule {}
