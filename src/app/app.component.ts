import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SocialMedia';
  user:any=''
  isLogged:boolean=false
  constructor(private auth:AuthService,private route:Router,private cdr: ChangeDetectorRef){
    this.user=localStorage.getItem('user')
    if(this.user==='admin'){
      this.isLogged=true;
    }
    //this.cdr.detectChanges()
    console.log(this.isLogged)
  }
  ngOnInit(): void {
    this.user=localStorage.getItem('user')
    if(this.user==='admin'){
      this.isLogged=true;
    }
    this.cdr.detectChanges()
    
  }

  logoutFromApp(){
    this.auth.logout()
    this.isLogged = false;
    this.route.navigate(['/login'])
    this.cdr.detectChanges()
    //localStorage.setItem('logged', 'false');
    
  }


}
