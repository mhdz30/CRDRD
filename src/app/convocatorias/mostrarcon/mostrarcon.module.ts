import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarconPageRoutingModule } from './mostrarcon-routing.module';

import { MostrarconPage } from './mostrarcon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarconPageRoutingModule
  ],
  declarations: [MostrarconPage]
})
export class MostrarconPageModule {}
