import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewconPageRoutingModule } from './newcon-routing.module';

import { NewconPage } from './newcon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewconPageRoutingModule
  ],
  declarations: [NewconPage]
})
export class NewconPageModule {}
