import { Component, Inject } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: any = '';
  password: any = '';
  cookie: any = {};
  isChecked: any;
  constructor(private auth: AuthService,  @Inject(DOCUMENT) private document: Document){}
  ngOnInit(){
    
    if(this.getCookie('user') && this.getCookie('pswd')){
      this.email = this.getCookie('user');
      this.password = this.getCookie('pswd');
    }
  }

  login(){
    if(this.email.trim() == ''){
      alert('Please Enter Email')
      return;
    }
    if(this.password.trim() == ''){
      alert('Please Enter Password')
      return;
    }
   
    this.setCookie();
    this.auth.login(this.email, this.password);

    this.email = ''
    this.password = ''
  }

  googleORGitSignIn(flag: boolean){
    this.auth.googleORGitSignIn(flag);
  }

  setCookie(){
    if(this.isChecked){
      this.document.cookie = 'user=' + this.email + ";path=http://localhost:4200/login/";
      this.document.cookie = 'pswd=' + this.password + ";path=http://localhost:4200/login/";
    }
  }

  getCookie(key: string){
    let carr = this.document.cookie.split(';');
    let ret = null;
    for(let c of carr){
      c = c.trim();
      if(c.split('=')[0] == key){
        ret = c.split('=')[1];
        break;
      }
    }
    return ret;
  }
  
}
