import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'dados-pessoais',
        loadChildren: () => import('../dados-pessoais/dados-pessoais.module').then( m => m.DadosPessoaisPageModule)
      }      

    ],
    
  },
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
export class HomePageRoutingModule {}
