import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerialinfoPageRoutingModule } from './serialinfo-routing.module';

import { SerialinfoPage } from './serialinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SerialinfoPageRoutingModule
  ],
  declarations: [SerialinfoPage]
})
export class SerialinfoPageModule {}
