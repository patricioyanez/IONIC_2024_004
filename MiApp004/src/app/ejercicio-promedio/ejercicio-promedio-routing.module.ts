import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjercicioPromedioPage } from './ejercicio-promedio.page';

const routes: Routes = [
  {
    path: '',
    component: EjercicioPromedioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjercicioPromedioPageRoutingModule {}
