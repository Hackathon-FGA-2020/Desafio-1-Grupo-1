import { FormsModule } from '@angular/forms'; 

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { IonicModule} from '@ionic/angular';
import {ModalEx} from './modal.page'
// The modal's module of the previous chapter

@NgModule({
    declarations: [
        ModalEx
    ],
    imports: [
      IonicModule,
      CommonModule,
      FormsModule
    ],
    
})
export class ModalExModule {}