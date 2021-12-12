import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FolderPage } from '../folder/folder.page';
import { AsdonantePage } from '../users/asdonante/asdonante.page';
import { AsreceptorPage } from '../users/asreceptor/asreceptor.page';

import { ReceptorPage } from './receptor.page';

const routes: Routes = [
  {
    path: '', 
    component: ReceptorPage,
    children:[
    {
      path: 'folder/inbox', loadChildren: () => import('../folder/folder.module').then( m => m.FolderPageModule)
    },
    {
      path: 'donante', loadChildren: () => import('../donante/donante.module').then( m => m.DonantePageModule)
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceptorPageRoutingModule {}
