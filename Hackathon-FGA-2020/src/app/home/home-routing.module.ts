import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'registro',
    loadChildren: () => import('../registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren:() =>import('../login/login.module').then(m => m.LoginPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
