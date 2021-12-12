import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarconvPageRoutingModule } from './mostrarconv-routing.module';

import { MostrarconvPage } from './mostrarconv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarconvPageRoutingModule
  ],
  declarations: [MostrarconvPage]
})
export class MostrarconvPageModule {}
