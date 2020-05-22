import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvisonegativoPageRoutingModule } from './avisonegativo-routing.module';

import { AvisonegativoPage } from './avisonegativo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvisonegativoPageRoutingModule
  ],
  declarations: [AvisonegativoPage]
})
export class AvisonegativoPageModule {}
