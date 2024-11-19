import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {


  // Condition avec *ngIf

  isVisible: boolean = false;

  toggleVisible(): void {
    this.isVisible = !this.isVisible;
  }



  // Boucle avec *ngFor

  fruits: string[] = [
    'Pommes',
    'Poires',
    'Bananes',
  ];
  


  // Commutation avec *ngSwitch

  role: "admin"|"editor"|"user" = "admin";
  
  roleAdmin(): void {
    this.role = "admin";
  }
  roleEditor(): void {
    this.role = "editor";
  }
  roleUser(): void {
    this.role = "user";
  }

}
