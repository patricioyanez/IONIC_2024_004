import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevePageRoutingModule } from './nueve-routing.module';

import { NuevePage } from './nueve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevePageRoutingModule
  ],
  declarations: [NuevePage]
})
export class NuevePageModule {}
