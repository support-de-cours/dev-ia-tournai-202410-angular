import { Component, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent implements OnInit {
  book?: Book;

  constructor() {
    console.log("I'm the constructor");
  }

  ngOnInit(): void {
    console.log("I'm the Ng on Init");
  }
}
