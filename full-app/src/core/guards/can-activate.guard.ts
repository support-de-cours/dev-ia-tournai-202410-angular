import { CanActivateFn } from '@angular/router';

export const canActivateGuard: CanActivateFn = (route, state) => {
  alert("Can Activate Guard");
  
  return true;
};
