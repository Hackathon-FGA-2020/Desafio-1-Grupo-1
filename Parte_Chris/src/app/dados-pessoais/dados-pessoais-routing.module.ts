import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosPessoaisPage} from './dados-pessoais.page';

const routes: Routes = [
  {
    path: '',
    component: DadosPessoaisPage,
  },
  {
    path: 'sintomas',
    loadChildren: () => import('../sintomas/sintomas.module').then( m => m.SintomasPageModule)
  }
,
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DadosPessoaisPageRoutingModule {}
