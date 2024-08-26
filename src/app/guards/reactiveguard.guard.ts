import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const reactiveguardGuard: CanActivateFn = (route, state) => {
  let user= JSON.parse(localStorage.getItem('currentUser')!)
  let r=inject(Router)

  if(!user){
    r.navigate(['/reactivesignin'])
  }
  return false;
};
