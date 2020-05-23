import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvisosegurancaPageRoutingModule } from './avisoseguranca-routing.module';

import { AvisosegurancaPage } from './avisoseguranca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvisosegurancaPageRoutingModule
  ],
  declarations: [AvisosegurancaPage]
})
export class AvisosegurancaPageModule {}
