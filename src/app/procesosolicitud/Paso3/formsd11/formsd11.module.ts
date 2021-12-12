import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Formsd11PageRoutingModule } from './formsd11-routing.module';

import { Formsd11Page } from './formsd11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Formsd11PageRoutingModule
  ],
  declarations: [Formsd11Page]
})
export class Formsd11PageModule {}
