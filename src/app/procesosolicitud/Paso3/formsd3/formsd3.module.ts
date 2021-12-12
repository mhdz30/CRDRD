import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Formsd3PageRoutingModule } from './formsd3-routing.module';

import { Formsd3Page } from './formsd3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Formsd3PageRoutingModule
  ],
  declarations: [Formsd3Page]
})
export class Formsd3PageModule {}
