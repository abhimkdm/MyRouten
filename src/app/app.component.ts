import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  title = "Angular Notes App";

  message = function() {
    this.title = "Angular Notes App";
  }
}
