import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: boolean = false; 

  constructor() {}

  isAuthenticated(): boolean {
    if(localStorage.getItem('logged')==='true'){
      return true;
    }
    return false;
  }

  
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('user', username);
      localStorage.setItem('logged','true');
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.setItem('logged','false')
    localStorage.setItem('user','')
    
  }
}

