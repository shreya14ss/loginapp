import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
email: string = '';
password: string = '';
confirmPassword: string = '';
lastName: string = '';
firstName: string = '';
hidePassword: string = '';

  constructor(private auth: AuthService){}
  ngOnInit(){

  }

  register(){

    if(this.email.trim() == ''){
      alert('Please Enter Email')
      return;
    }
    if(this.password.trim() == ''){
      alert('Please Enter Password')
      return;
    }

    this.auth.register(this.email, this.password);

    this.email = ''
    this.password = ''
  }

  googleORGitSignIn(flag: boolean){
    this.auth.googleORGitSignIn(flag);
  }
}
