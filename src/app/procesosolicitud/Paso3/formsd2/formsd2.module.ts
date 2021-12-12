import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Formsd2PageRoutingModule } from './formsd2-routing.module';

import { Formsd2Page } from './formsd2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Formsd2PageRoutingModule
  ],
  declarations: [Formsd2Page]
})
export class Formsd2PageModule {}
