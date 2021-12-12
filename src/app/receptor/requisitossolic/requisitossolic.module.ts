import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequisitossolicPageRoutingModule } from './requisitossolic-routing.module';

import { RequisitossolicPage } from './requisitossolic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequisitossolicPageRoutingModule
  ],
  declarations: [RequisitossolicPage]
})
export class RequisitossolicPageModule {}
