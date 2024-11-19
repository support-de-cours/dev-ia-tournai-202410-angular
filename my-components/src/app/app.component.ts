import { Component } from '@angular/core';
import { BookAllComponent } from './book-all/book-all.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BookAllComponent,
    BookDetailComponent,
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
}
