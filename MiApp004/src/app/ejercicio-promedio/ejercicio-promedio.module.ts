import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjercicioPromedioPageRoutingModule } from './ejercicio-promedio-routing.module';

import { EjercicioPromedioPage } from './ejercicio-promedio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjercicioPromedioPageRoutingModule
  ],
  declarations: [EjercicioPromedioPage]
})
export class EjercicioPromedioPageModule {}
