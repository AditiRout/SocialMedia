import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authS=inject(AuthService)
  const router=inject(Router)
  if (authS.isAuthenticated()) {
    console.log("checked")
    return true; 
  } else {  
    router.navigate(['/login']);
    return false; 
  }


};
