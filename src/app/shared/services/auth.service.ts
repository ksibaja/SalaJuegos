import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public ngZone: NgZone,
    public router: Router
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
      console.log("localstorage: ", localStorage)
    })
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("user: ", user);
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Sign in with Facebook
  FacebookAuth() {
    return this.AuthLogin(new auth.FacebookAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!')
        this.ngZone.run(() => {
          this.router.navigate(['sala']);
        })
      }).catch((error) => {
        console.log(error)
      })
  }

  SignOut() {
    return this.afAuth.auth.signOut()
      .then(() => {
        console.log("You have been successfully logged out")
        localStorage.removeItem('user');
        this.router.navigate(['login']);
      })
  }

}