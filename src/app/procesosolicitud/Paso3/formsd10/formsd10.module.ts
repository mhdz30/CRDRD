import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Formsd10PageRoutingModule } from './formsd10-routing.module';

import { Formsd10Page } from './formsd10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Formsd10PageRoutingModule
  ],
  declarations: [Formsd10Page]
})
export class Formsd10PageModule {}
