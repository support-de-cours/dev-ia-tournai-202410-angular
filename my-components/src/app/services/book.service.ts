import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _book: BehaviorSubject<Book|undefined> = new BehaviorSubject<Book|undefined>(undefined);

  set book(book: Book|undefined)
  {
    this._book.next(book);
  }

  get book(): BehaviorSubject<Book|undefined>
  {
    return this._book;
  }
}
