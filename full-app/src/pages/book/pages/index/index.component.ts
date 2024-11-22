import { Component, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book';
import { BookService } from '../../services/book.service';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {
  // 4. Envois la liste des Books à la vue (interpolation)
  //    La liste sera renseignée avec la fonction callback de l'étape 2
  public books: Book[] = [];

  constructor(
    // 1. Creation de l'intance du service BookService
    private bookService: BookService
  ){}

  ngOnInit(): void {

    // 2. Ecoute permanante du conteneur "_books" depuis le BookService (la methode get books())
    this.bookService.books.subscribe( books => {
      this.books = books      
    } );

    // 3. Delenche la requete de récupération des Books depuis l'API
    this.bookService.getBooksApi();
  }
}
