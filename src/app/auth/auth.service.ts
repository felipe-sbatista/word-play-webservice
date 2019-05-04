import { Injectable, Output, EventEmitter } from '@angular/core';

import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  user: User = null;
  authState = null;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     this.user = user;
    //     localStorage.setItem('user', JSON.stringify(this.user));
    //     JSON.parse(localStorage.getItem('user'))
    //   } else {
    //     localStorage.setItem('user', null);
    //     JSON.parse(localStorage.getItem('user'));
    //   }
    // });
  }

  // get isLoggedIn(): boolean {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   return (user !== null) ? true : false;
  // }

  async login(email: string, password: string) {
    await this.afAuth.auth.signInWithEmailAndPassword(email, password).then(response => {
      console.log('Usuario logado');
      this.change.emit(true);
      this.router.navigate(['listar/usuarios']);
    }).catch(error => {
      this.change.emit(false);
      alert("Usuário não encontrado!");
    });
  }

  async logout() {
    await this.afAuth.auth.signOut();
    // localStorage.removeItem('user');
    this.change.emit(false);

  }

}
