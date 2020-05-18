import { HomePage } from './home/home.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { LoginPage } from './login/login.page';
import { SinginPage } from './singin/singin.page';
import { SingupPage } from './singup/singup.page';





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

// export const firebaseConfig = {< !--The core Firebase JS SDK is always required and must be listed first -->
//   <script src="/__/firebase/7.14.4/firebase-app.js" > </script>

//     < !--TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/7.14.4/firebase-analytics.js" > </script>

//   < !--Initialize Firebase-- >
//     <script src="/__/firebase/init.js" > </script>
  
//   }
