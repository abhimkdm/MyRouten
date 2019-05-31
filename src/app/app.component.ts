import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  title = "I'm from App component";

  message = function() {
    this.title = "Welcome To Angular";
  }
}
