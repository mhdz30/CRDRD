import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Formsd1PageRoutingModule } from './formsd1-routing.module';

import { Formsd1Page } from './formsd1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Formsd1PageRoutingModule
  ],
  declarations: [Formsd1Page]
})
export class Formsd1PageModule {}
