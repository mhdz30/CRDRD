import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsdonantePageRoutingModule } from './asdonante-routing.module';

import { AsdonantePage } from './asdonante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsdonantePageRoutingModule
  ],
  declarations: [AsdonantePage]
})
export class AsdonantePageModule {}
