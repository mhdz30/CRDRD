import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabuserPageRoutingModule } from './tabuser-routing.module';

import { TabuserPage } from './tabuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabuserPageRoutingModule
  ],
  declarations: [TabuserPage]
})
export class TabuserPageModule {}
