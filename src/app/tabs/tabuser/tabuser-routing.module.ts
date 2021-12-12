import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabuserPage } from './tabuser.page';

const routes: Routes = [
  {
    path: '', component: TabuserPage,
    children: [
      {
        path: 'asdonante', loadChildren: () => import('../../users/asdonante/asdonante.module').then( m => m.AsdonantePageModule)
      },
      {
        path: 'folder/Inbox', loadChildren: () => import('../../folder/folder.module').then( m => m.FolderPageModule)
      },
      {
        path: 'asreceptor', loadChildren: () => import('../../users/asreceptor/asreceptor.module').then( m => m.AsreceptorPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabuserPageRoutingModule {}
