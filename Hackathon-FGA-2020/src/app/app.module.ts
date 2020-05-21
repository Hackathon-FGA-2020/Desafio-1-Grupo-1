import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { NavController, NavParams } from '@ionic/angular';
import { AngularFireAuth } from "@angular/fire/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBPPJZeqIozh5OkdhMBY28fxYa07n2CQYs",
  authDomain: "hackathon-fga-2020.firebaseapp.com",
  databaseURL: "https://hackathon-fga-2020.firebaseio.com",
  projectId: "hackathon-fga-2020",
  storageBucket: "hackathon-fga-2020.appspot.com",
  messagingSenderId: "472112039252",
  appId: "1:472112039252:web:50c4c7675daa225e33b4c1",
  measurementId: "G-67D2KMBS01"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireAuth
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
