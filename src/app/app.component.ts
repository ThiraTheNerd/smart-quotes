// import { Quote } from '@angular/compiler';
import { Component } from '@angular/core';
import { title } from 'process';
import { from } from 'rxjs';
import {Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes: Quote[]; 

  constructor(){
    this.quotes = [];
  }

  addQuote(name: HTMLInputElement, quote: HTMLInputElement, author: HTMLInputElement): boolean{
    console.log(`Adding :
    ${name.value}, 
    ${quote.value},
    ${author.value},
    ${Quote}`);
    
    this.quotes.push(new Quote(quote.value, author.value, name.value));

    name.value = "";
    quote.value= "";
    author.value= "";

    return false;
  }

  sortedQuotes(): Quote[] {
    return this.quotes.sort((a:Quote, b:Quote) => b.votes - a.votes);
  }
}
