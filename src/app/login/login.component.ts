import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (this.authService.login(this.username, this.password)) {
      window.location.href="http:localhost:4200/posts"    //it helps to reload 
      // On successful login, navigate to the posts page
      //this.router.navigate(['/posts']); ///doesnt reload
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }

}
