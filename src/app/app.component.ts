import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addQuote(name: HTMLInputElement, quote: HTMLInputElement, author: HTMLInputElement): boolean{
    console.log(`Adding :
    ${name.value}, 
    ${quote.value},
    ${author.value}`);
    return false;
  }
}
