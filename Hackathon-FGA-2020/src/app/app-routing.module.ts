import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'positivo',
    loadChildren: () => import('./avisos/positivo/positivo.module').then( m => m.PositivoPageModule)
  },
  {
    path: 'positivo',
    loadChildren: () => import('./avisos./positivo/positivo.module').then( m => m.PositivoPageModule)
  },
  {
    path: 'avisos',
    loadChildren: () => import('./avisos/avisos.module').then( m => m.AvisosPageModule)
  },
  {
    path: 'avisopositivo',
    loadChildren: () => import('./avisopositivo/avisopositivo.module').then( m => m.AvisopositivoPageModule)
  },
  {
    path: 'avisonegativo',
    loadChildren: () => import('./avisonegativo/avisonegativo.module').then( m => m.AvisonegativoPageModule)
  },
  {
    path: 'avisoseguranca',
    loadChildren: () => import('./avisoseguranca/avisoseguranca.module').then( m => m.AvisosegurancaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
