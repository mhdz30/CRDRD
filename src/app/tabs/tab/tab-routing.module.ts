import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '', component: TabPage,
    children: [
      {
        path: 'receptor', loadChildren: () => import('../../receptor/receptor.module').then( m => m.ReceptorPageModule)
      },
      {
        path: 'folder/Inbox', loadChildren: () => import('../../folder/folder.module').then( m => m.FolderPageModule)
      },
      {
        path: 'donante', loadChildren: () => import('../../donante/donante.module').then( m => m.DonantePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
