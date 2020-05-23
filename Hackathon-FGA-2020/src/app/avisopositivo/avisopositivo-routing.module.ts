import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvisopositivoPage } from './avisopositivo.page';

const routes: Routes = [
  {
    path: '',
    component: AvisopositivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvisopositivoPageRoutingModule {}
