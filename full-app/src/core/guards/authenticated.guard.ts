import { CanActivateFn } from '@angular/router';

export const authenticatedGuard: CanActivateFn = (route, state) => {
  // Ajoute la logique  de verification de l'indentification de l'utilisateur
  // ...

  // Retourne true ou false
  return true;
};
