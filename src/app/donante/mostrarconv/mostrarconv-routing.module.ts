import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarconvPage } from './mostrarconv.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarconvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarconvPageRoutingModule {}
