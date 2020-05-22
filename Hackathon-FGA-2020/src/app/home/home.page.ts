
import { AngularFireAuth } from 'angularfire2/auth';
import { RegistroPage } from './../registro/registro.page';
import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';


import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(
    private loadingCtrl:LoadingController,
    private toastCtrl: ToastController,
    ) {}


      
    }
    