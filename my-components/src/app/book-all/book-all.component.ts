import { Component } from '@angular/core';
import { Book } from '../interfaces/book';
import { CommonModule } from '@angular/common';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-all',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-all.component.html',
  styleUrl: './book-all.component.css'
})
export class BookAllComponent {
  books: Book[] = [
    {
      description: "This is an awesome book....",
      title: "My first book",
      id: 1,
      price: 9.99
    },
    {
      id: 2,
      title: "The second book",
      price: 3.99
    },
    {
      id: 3,
      title: "The third book",
      description: null,
      price: 99.99
    }
  ]

  constructor(
    private bookService: BookService
  ){}

  onBookClick(book: Book) {
    // console.log( book );
    
    this.bookService.book = book;
  }
}
