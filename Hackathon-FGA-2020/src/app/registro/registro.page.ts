import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';

export class User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public user:User = new User();
  
  ngOnInit() {
  }
}
