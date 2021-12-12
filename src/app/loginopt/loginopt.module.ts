import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginoptPageRoutingModule } from './loginopt-routing.module';

import { LoginoptPage } from './loginopt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginoptPageRoutingModule
  ],
  declarations: [LoginoptPage]
})
export class LoginoptPageModule {}
