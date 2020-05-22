import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { SafePipe } from './tab2.page';
import{ModalExModule} from '../modal/modal.module'
import{ModalEx} from '../modal/modal.page'

import { Tab2PageRoutingModule } from './tab2-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }]),
    Tab2PageRoutingModule,
    ModalExModule
  ],
  declarations: [Tab2Page, SafePipe],
  exports: [SafePipe],
  entryComponents: [ModalEx] 
  
})
export class Tab2PageModule {}
//ModalPage, ModalEx
