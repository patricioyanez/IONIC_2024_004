import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevePage } from './nueve.page';

const routes: Routes = [
  {
    path: '',
    component: NuevePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevePageRoutingModule {}
