import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SecurityService } from '../../services/security.service';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  private securityService = inject(SecurityService)

  constructor(
    private httpClient: HttpClient,
    // private securityService: SecurityService
  ){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    })
  }

  onSubmit(form: FormGroup): void {
    if (form.value.email.valid) {
      alert('Email is required');
    }
    if (form.value.password.valid) {
      alert('Password is required');
    }

    if (form.valid) {
      this.httpClient
        .post('http://localhost:3000/api/v1/login', form.value)
        .subscribe((response: any) => {

          console.log( "1. Envois du token dans le security service" );
          console.log( response.token );
          
          this.securityService.token = response.token;
        })
    }
  }

  // alertEmail(form: FormGroup) {
  //   if (!form.get('email')?.valid) {
  //     alert('Alert EMAIL Invalid');
  //   }
  // }
}
