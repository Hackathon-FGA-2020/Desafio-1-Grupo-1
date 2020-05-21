import { AuthService } from './../service/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegistroPage } from './../registro/registro.page';
import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { User } from '../models/user'; 

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public userLogin: User = {};
  public userRegistro: User = {};
  private loading:any;

  user = {} as User;

  constructor(
    private loadingCtrl:LoadingController,
    private toastCtrl: ToastController,
    private auth: AuthService
    ) {}

  login(){
    console.log(this.userLogin)

  }

  async registro(){

    await this.presentLoading();

    try{
    await this.auth.registro(this.userRegistro);
    }
    catch(error){
      console.error(error);
    }
    finally {
    this.loading.dismiss();
  }
    }
  

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Por favor, aguarde...' });
    return this.loading.present();
  }


}
