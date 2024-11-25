import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../interfaces/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  private _books: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  private _submission: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false)

  constructor(
    private httpClient: HttpClient
  ){}

  set books(books: Book[]) {
    this._books.next(books);
  }

  get books(): BehaviorSubject<Book[]> {
    return this._books;
  }

  set submission(state:Boolean) {
    this._submission.next(state)
  }
  get submission(): BehaviorSubject<Boolean> {
    return this._submission
  }


  getBooksApi() {
    this.httpClient
      .get('http://localhost:3000/api/v1/books')
      .subscribe((response: any) => {
        this.books = response;
      })
  }

  setBookApi(book: Book) {

    this.httpClient
      .post('http://localhost:3000/api/v1/books', book)
      .subscribe((response: any) => {
        
        // console.log(response);

        this.submission = false;
        
      })


  }
}
