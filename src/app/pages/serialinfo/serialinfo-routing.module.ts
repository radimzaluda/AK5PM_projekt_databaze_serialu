import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerialinfoPage } from './serialinfo.page';

const routes: Routes = [
  {
    path: '',
    component: SerialinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerialinfoPageRoutingModule {}
