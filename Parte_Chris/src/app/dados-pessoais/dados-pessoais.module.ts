import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DadosPessoaisPage } from './dados-pessoais.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DadosPessoaisPageRoutingModule } from './dados-pessoais-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    DadosPessoaisPageRoutingModule
  ],
  declarations: [DadosPessoaisPage]
})
export class DadosPessoaisPageModule {}
