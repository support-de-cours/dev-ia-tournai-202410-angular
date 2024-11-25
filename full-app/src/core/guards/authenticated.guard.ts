import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { SecurityService } from '../../pages/security/services/security.service';

export const authenticatedGuard: CanActivateFn = (route, state) => {
  // Ajoute la logique  de verification de l'indentification de l'utilisateur
  // ...

  console.log("3. Déclenchement du Guard Authenticated");
  
  const securityService = inject(SecurityService);

  // Retourne true ou false
  
  if (securityService.token.value) {
    console.log("5. Test du token valide");
    return true;
  } else {
    console.log('Accès refusé : utilisateur non authentifié');
    return false;
  }

};
