import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisconvocatoriasmenuPageRoutingModule } from './misconvocatoriasmenu-routing.module';

import { MisconvocatoriasmenuPage } from './misconvocatoriasmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisconvocatoriasmenuPageRoutingModule
  ],
  declarations: [MisconvocatoriasmenuPage]
})
export class MisconvocatoriasmenuPageModule {}
