import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from "angularfire2";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  autenticacao: FirebaseAuthState;
  email: string;
  senha: string;

  constructor() { }

  ngOnInit() {
  }

}
