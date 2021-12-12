import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Formsd7PageRoutingModule } from './formsd7-routing.module';

import { Formsd7Page } from './formsd7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Formsd7PageRoutingModule
  ],
  declarations: [Formsd7Page]
})
export class Formsd7PageModule {}
