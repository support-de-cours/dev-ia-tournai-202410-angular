import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  // Definition du formulaire
  // --

  public userForm!: FormGroup;



  constructor(
    private httpClient: HttpClient,
    private router: Router
  ){}



  // Initialisation de la vue du composant
  // --

  ngOnInit(): void {

    // Renseignement des element du formulaire
    this.userForm = new FormGroup({
      firstname: new FormControl('',  Validators.required),
      lastname : new FormControl('',  Validators.required),
      email    : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.minLength(6) ]),
    });
  }


  // Soumission du formulaire
  // --

  onSubmit(form: FormGroup) {
    if (form.valid)
    {
      // console.log("Submit form", form);
      this.httpClient
        .post('http://localhost:3000/api/v1/register', form.value)
        .subscribe((response: any) => {
          this.router.navigate(['/login']);
        })
    }
  }
}
