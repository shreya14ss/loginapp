import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  email: string = ''

  constructor(private auth: AuthService){}
    ngOnInit(){
      this.email = JSON.stringify(localStorage.getItem('name'));
    }

    logout(){
      this.auth.logout();
      
    }
}
