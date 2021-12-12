import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsreceptorPageRoutingModule } from './asreceptor-routing.module';

import { AsreceptorPage } from './asreceptor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsreceptorPageRoutingModule
  ],
  declarations: [AsreceptorPage]
})
export class AsreceptorPageModule {}
