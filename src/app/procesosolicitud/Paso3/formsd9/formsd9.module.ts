import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Formsd9PageRoutingModule } from './formsd9-routing.module';

import { Formsd9Page } from './formsd9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Formsd9PageRoutingModule
  ],
  declarations: [Formsd9Page]
})
export class Formsd9PageModule {}
