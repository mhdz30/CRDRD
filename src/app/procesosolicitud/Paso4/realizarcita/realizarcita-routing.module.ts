import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealizarcitaPage } from './realizarcita.page';

const routes: Routes = [
  {
    path: '',
    component: RealizarcitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealizarcitaPageRoutingModule {}
