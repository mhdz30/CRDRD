import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealizarcitaPageRoutingModule } from './realizarcita-routing.module';

import { RealizarcitaPage } from './realizarcita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealizarcitaPageRoutingModule
  ],
  declarations: [RealizarcitaPage]
})
export class RealizarcitaPageModule {}
