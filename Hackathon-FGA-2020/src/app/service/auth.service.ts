import { AngularFireAuthModule } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { FirebaseAuth } from 'angularfire2';
import { User } from '../models/user';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: FirebaseAuth) { }

  login(user:User){
  }

  registro(user: User){
    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
    
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('Sua senha é muito fraca.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }

  logout(){}

  getAuth(){}
  
}
