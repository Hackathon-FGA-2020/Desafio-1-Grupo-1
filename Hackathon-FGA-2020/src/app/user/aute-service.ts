import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../user/user.page';

@Injectable()
export class Authservice {
    User: Observable<firebase.User>;

    constructor(private angularFireAuth: AngularFireAuth){
        this.User = angularFireAuth.authState;
    }

}

