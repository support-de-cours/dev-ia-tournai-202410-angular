import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './homepage.component.html'
})
export class HomepageComponent {

  carouselItems: string[] = [
    "https://picsum.photos/800/400?1",
    "https://picsum.photos/800/400?2",
    "https://picsum.photos/800/400?3",
  ]
}
