import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.css'
})
export class ResetpasswordComponent {

  remail: string = '';

  constructor(private auth: AuthService){}
  ngOnInit(){

  }
  resetpassword(){
    this.auth.changepassword(this.remail);
  }
}
