import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Formsd6PageRoutingModule } from './formsd6-routing.module';

import { Formsd6Page } from './formsd6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Formsd6PageRoutingModule
  ],
  declarations: [Formsd6Page]
})
export class Formsd6PageModule {}
