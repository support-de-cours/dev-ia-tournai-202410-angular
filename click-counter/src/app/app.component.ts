import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {

  // DATA BINDING
  // --

  // Interpolation
  title = 'click-counter';

  // Property Binding
  myImg = "https://picsum.photos/300/300";

  // Event Binding
  eventBindingDemo() {
    alert("I'm a triggered event !");
  }
  changeTitle() {
    this.title = "My new title";
  }

  // Two Way Binding
  username = "John";
  changeName() {
    this.username = "Francis !!!"
  }


  // ----- 

  // Click Counter
  count = 0;
  less() {
    if (this.count <= -10) return;
    this.count--;
  }
  more() {
    if (this.count >= 10) return;
    this.count++;
  }
}
