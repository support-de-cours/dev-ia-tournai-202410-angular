import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {

  public bookForm!: FormGroup;
  public submission!: Boolean;

  constructor(
    private bookService: BookService
  ){}

  ngOnInit(): void {
    this.bookService.submission.subscribe(state => this.submission = state);

    this.bookForm = new FormGroup({
      title      : new FormControl('', Validators.required),
      description: new FormControl('',),
      price      : new FormControl('', [Validators.required]),
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid)
    {
      this.bookService.submission = true;
      this.bookService.setBookApi(form.value);
    }
  }
}
