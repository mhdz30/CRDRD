import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Formsd5PageRoutingModule } from './formsd5-routing.module';

import { Formsd5Page } from './formsd5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Formsd5PageRoutingModule
  ],
  declarations: [Formsd5Page]
})
export class Formsd5PageModule {}
