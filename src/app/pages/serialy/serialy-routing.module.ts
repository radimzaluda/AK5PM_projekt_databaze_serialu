import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerialyPage } from './serialy.page';

const routes: Routes = [
  {
    path: '',
    component: SerialyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerialyPageRoutingModule {}
