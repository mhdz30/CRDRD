import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsangrePageRoutingModule } from './consangre-routing.module';

import { ConsangrePage } from './consangre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsangrePageRoutingModule
  ],
  declarations: [ConsangrePage]
})
export class ConsangrePageModule {}
