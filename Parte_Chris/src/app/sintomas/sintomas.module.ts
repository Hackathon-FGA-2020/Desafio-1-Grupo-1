import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SintomasPage } from './sintomas.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SintomasPageRoutingModule } from './sintomas-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SintomasPageRoutingModule
  ],
  declarations: [SintomasPage]
})
export class SintomasPageModule {}
