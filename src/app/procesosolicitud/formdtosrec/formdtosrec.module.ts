import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormdtosrecPageRoutingModule } from './formdtosrec-routing.module';

import { FormdtosrecPage } from './formdtosrec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormdtosrecPageRoutingModule
  ],
  declarations: [FormdtosrecPage]
})
export class FormdtosrecPageModule {}
