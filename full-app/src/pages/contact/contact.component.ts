import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  carouselItems: string[] = [
    "https://picsum.photos/800/400?10",
    "https://picsum.photos/800/400?20",
    "https://picsum.photos/800/400?30",
  ]
}
