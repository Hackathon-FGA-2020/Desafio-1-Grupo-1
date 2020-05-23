import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvisopositivoPageRoutingModule } from './avisopositivo-routing.module';

import { AvisopositivoPage } from './avisopositivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvisopositivoPageRoutingModule
  ],
  declarations: [AvisopositivoPage]
})
export class AvisopositivoPageModule {}
