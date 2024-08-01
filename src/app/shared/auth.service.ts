import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { GoogleAuthProvider, GithubAuthProvider } from '@angular/fire/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  // login method
  login(email: string, password: string){
    this.fireauth.signInWithEmailAndPassword(email, password).then((res)=> {
        localStorage.setItem('token', JSON.stringify(res?.user?.uid))
        localStorage.setItem('name', email);
        this.router.navigate(['/dashboard']);
    }, err => {
        alert(err.message);
        this.router.navigate(['/login']);
    })
  }

  // register method
  register(email: string, password: string){
    this.fireauth.createUserWithEmailAndPassword(email, password).then(()=> {
      alert('Registration Successful');
      this.router.navigate(['/login']);
    }, err => {
        alert(err.message);
        this.router.navigate(['/register']);
    })
  }

  // signout method
  logout(){
    this.fireauth.signOut().then(()=> {
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }

  //sign in with google method
  googleORGitSignIn(flag: boolean){
    return this.fireauth.signInWithPopup(flag ? new GoogleAuthProvider : new GithubAuthProvider).then(res => {
      localStorage.setItem('token', JSON.stringify(res?.user?.uid))
      this.router.navigate(['/dashboard']);
    }, err => {
      alert(err.message)
    })
  }

  //reset password method
  changepassword(email: string){
    this.fireauth.sendPasswordResetEmail(email).then(()=> {
      alert('Password Reset Link Sent to Email');
      this.router.navigate(['/login']);
    }, err => {
        alert(err.message);
        this.router.navigate(['/resetpassword']);
    })
  }

  IsLoggedIn(){
    if(localStorage.getItem('token')){
      console.log(typeof JSON.stringify(localStorage.getItem('token')))
      return true;
    }
    else
     return false
  }
}
