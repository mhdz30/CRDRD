import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvocatoriasmainPageRoutingModule } from './convocatoriasmain-routing.module';

import { ConvocatoriasmainPage } from './convocatoriasmain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvocatoriasmainPageRoutingModule
  ],
  declarations: [ConvocatoriasmainPage]
})
export class ConvocatoriasmainPageModule {}
