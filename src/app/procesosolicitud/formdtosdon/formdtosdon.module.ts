import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormdtosdonPageRoutingModule } from './formdtosdon-routing.module';

import { FormdtosdonPage } from './formdtosdon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormdtosdonPageRoutingModule
  ],
  declarations: [FormdtosdonPage]
})
export class FormdtosdonPageModule {}
