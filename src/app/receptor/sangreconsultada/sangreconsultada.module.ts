import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SangreconsultadaPageRoutingModule } from './sangreconsultada-routing.module';

import { SangreconsultadaPage } from './sangreconsultada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SangreconsultadaPageRoutingModule
  ],
  declarations: [SangreconsultadaPage]
})
export class SangreconsultadaPageModule {}
