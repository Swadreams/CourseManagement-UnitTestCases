import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UnitTests';

  testFunction() {
    let a = 'I am';
    let b = 'Test case function.'
    return `${a} ${b}`;    
  }
}
