import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequisitosPageRoutingModule } from './requisitos-routing.module';

import { RequisitosPage } from './requisitos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequisitosPageRoutingModule
  ],
  declarations: [RequisitosPage]
})
export class RequisitosPageModule {}
