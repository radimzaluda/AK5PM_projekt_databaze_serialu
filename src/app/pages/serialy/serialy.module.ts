import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerialyPageRoutingModule } from './serialy-routing.module';

import { SerialyPage } from './serialy.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SerialyPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [SerialyPage]
})
export class SerialyPageModule {}
