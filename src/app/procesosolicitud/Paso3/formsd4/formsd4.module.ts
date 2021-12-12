import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Formsd4PageRoutingModule } from './formsd4-routing.module';

import { Formsd4Page } from './formsd4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Formsd4PageRoutingModule
  ],
  declarations: [Formsd4Page]
})
export class Formsd4PageModule {}
