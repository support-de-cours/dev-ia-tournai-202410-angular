import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private _token: BehaviorSubject<string> = new BehaviorSubject<string>('');

  // Ecrire la nouvelle valeure dans le conteneur _token
  set token(value: string) {
    this._token.next(value);
    console.log("2. Le token est enregistré dans la propiété _token de security service");
  }

  // Lire l'etat du conteneur _token
  get token(): BehaviorSubject<string> {
    console.log("4. Récupération du _token ");
    
    return this._token;
  }

}
