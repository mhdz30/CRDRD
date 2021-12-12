import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Formsd8PageRoutingModule } from './formsd8-routing.module';

import { Formsd8Page } from './formsd8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Formsd8PageRoutingModule
  ],
  declarations: [Formsd8Page]
})
export class Formsd8PageModule {}
