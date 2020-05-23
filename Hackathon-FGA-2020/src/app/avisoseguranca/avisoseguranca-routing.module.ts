import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvisosegurancaPage } from './avisoseguranca.page';

const routes: Routes = [
  {
    path: '',
    component: AvisosegurancaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvisosegurancaPageRoutingModule {}
