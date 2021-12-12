import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarconPage } from './mostrarcon.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarconPageRoutingModule {}
