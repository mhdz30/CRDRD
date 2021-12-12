import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonantePageRoutingModule } from './donante-routing.module';

import { DonantePage } from './donante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonantePageRoutingModule
  ],
  declarations: [DonantePage]
})
export class DonantePageModule {}
