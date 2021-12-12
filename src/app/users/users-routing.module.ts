import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsdonantePage } from './asdonante/asdonante.page';
import { AsreceptorPage } from './asreceptor/asreceptor.page';




import { UsersPage } from './users.page';

const routes: Routes = [
  {
    path: '', component: UsersPage,
    children: [
      {
        path: 'asdonante', component: AsdonantePage
      },
      {
        path: 'asreceptor', component: AsreceptorPage
      },
    ]
  }
];

   
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersPageRoutingModule {}
