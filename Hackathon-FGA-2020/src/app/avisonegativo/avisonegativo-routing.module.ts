import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvisonegativoPage } from './avisonegativo.page';

const routes: Routes = [
  {
    path: '',
    component: AvisonegativoPage
  }
  ,{
    path: 'negativo',
    loadChildren:() =>import('../avisonegativo/avisonegativo.module').then(m => m.NegativoPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvisonegativoPageRoutingModule {}
