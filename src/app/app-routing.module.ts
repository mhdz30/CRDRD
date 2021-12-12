import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loginopt',
    pathMatch: 'full'
  },
  {
    path: 'folder/',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'formdtosrec',
    loadChildren: () => import('./procesosolicitud/formdtosrec/formdtosrec.module').then( m => m.FormdtosrecPageModule)
  },
  {
    path: 'formdtosdon',
    loadChildren: () => import('./procesosolicitud/formdtosdon/formdtosdon.module').then( m => m.FormdtosdonPageModule)
  },
  {
    path: 'formsd1',
    loadChildren: () => import('./procesosolicitud/Paso3/formsd1/formsd1.module').then( m => m.Formsd1PageModule)
  },

  {
    path: 'formsd2',
    loadChildren: () => import('./procesosolicitud/Paso3/formsd2/formsd2.module').then( m => m.Formsd2PageModule)
  },
  {
    path: 'formsd3',
    loadChildren: () => import('./procesosolicitud/Paso3/formsd3/formsd3.module').then( m => m.Formsd3PageModule)
  },
  {
    path: 'formsd4',
    loadChildren: () => import('./procesosolicitud/Paso3/formsd4/formsd4.module').then( m => m.Formsd4PageModule)
  },
  {
    path: 'formsd5',
    loadChildren: () => import('./procesosolicitud/Paso3/formsd5/formsd5.module').then( m => m.Formsd5PageModule)
  },
  {
    path: 'formsd6',
    loadChildren: () => import('./procesosolicitud/Paso3/formsd6/formsd6.module').then( m => m.Formsd6PageModule)
  },
  {
    path: 'formsd7',
    loadChildren: () => import('./procesosolicitud/Paso3/formsd7/formsd7.module').then( m => m.Formsd7PageModule)
  },
  {
    path: 'formsd8',
    loadChildren: () => import('./procesosolicitud/Paso3/formsd8/formsd8.module').then( m => m.Formsd8PageModule)
  },
  {
    path: 'formsd9',
    loadChildren: () => import('./procesosolicitud/Paso3/formsd9/formsd9.module').then( m => m.Formsd9PageModule)
  },
  {
    path: 'formsd10',
    loadChildren: () => import('./procesosolicitud/Paso3/formsd10/formsd10.module').then( m => m.Formsd10PageModule)
  },
  {
    path: 'formsd11',
    loadChildren: () => import('./procesosolicitud/Paso3/formsd11/formsd11.module').then( m => m.Formsd11PageModule)
  },
  {
    path: 'donante',
    loadChildren: () => import('./donante/donante.module').then( m => m.DonantePageModule)
  },
  {
    path: 'newcon',
    loadChildren: () => import('./convocatorias/newcon/newcon.module').then( m => m.NewconPageModule)
  },
  {
    path: 'consangre',
    loadChildren: () => import('./receptor/consangre/consangre.module').then( m => m.ConsangrePageModule)
  },
  {
    path: 'receptor',
    loadChildren: () => import('./receptor/receptor.module').then( m => m.ReceptorPageModule)
  },
  {
    path: 'sangreconsultada/:xyz',
    loadChildren: () => import('./receptor/sangreconsultada/sangreconsultada.module').then( m => m.SangreconsultadaPageModule)
  },
  {
    path: 'mostrarcon',
    loadChildren: () => import('./convocatorias/mostrarcon/mostrarcon.module').then( m => m.MostrarconPageModule)
  },
  {
    path: 'mostrarconv',
    loadChildren: () => import('./donante/mostrarconv/mostrarconv.module').then( m => m. MostrarconvPageModule)
  },
  {
    path: 'requisitos',
    loadChildren: () => import('./donante/requisitos/requisitos.module').then( m => m. RequisitosPageModule)
  },
  {
    path: 'loginopt',
    loadChildren: () => import('./loginopt/loginopt.module').then( m => m.LoginoptPageModule)
  },
  {
    path: 'asdonante',
    loadChildren: () => import('./users/asdonante/asdonante.module').then( m => m.AsdonantePageModule)
  },
  {
    path: 'donante',
    loadChildren: () => import('./donante/donante.module').then( m => m.DonantePageModule)
  },
  {
    path: 'misdonaciones',
    loadChildren: () => import('./donante/misdonaciones/misdonaciones.module').then( m => m.MisdonacionesPageModule)
  },
  {
    path: 'requisitossolic',
    loadChildren: () => import('./receptor/requisitossolic/requisitossolic.module').then( m => m.RequisitossolicPageModule)
  },
  {
    path: 'realizarcita',
    loadChildren: () => import('./procesosolicitud/Paso4/realizarcita/realizarcita.module').then( m => m.RealizarcitaPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'asdonante',
    loadChildren: () => import('./users/asdonante/asdonante-routing.module').then( m => m.AsdonantePageRoutingModule)
  },
  {
    path: 'asreceptor',
    loadChildren: () => import('./users/asreceptor/asreceptor-routing.module').then( m => m.AsreceptorPageRoutingModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users-routing.module').then( m => m.UsersPageRoutingModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./tabs/tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'convocatoriasmain',
    loadChildren: () => import('./convocatorias/convocatoriasmain/convocatoriasmain.module').then( m => m.ConvocatoriasmainPageModule)
  },
  {
    path: 'tabuser',
    loadChildren: () => import('./tabs/tabuser/tabuser.module').then( m => m.TabuserPageModule)
  },
  {
    path: 'misconvocatoriasmenu',
    loadChildren: () => import('./convocatorias/misconvocatoriasmenu/misconvocatoriasmenu.module').then( m => m.MisconvocatoriasmenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
