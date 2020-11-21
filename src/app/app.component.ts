import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imagenLogo = '../assets/logo-tienda.JPG';
  title = 'productos-front';

  constructor(public afAuth: AngularFireAuth) {
  }
  login() {
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.signOut();
  }
}
