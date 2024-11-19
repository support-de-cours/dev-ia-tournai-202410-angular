import { CanActivateFn } from '@angular/router';

export const yesGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
