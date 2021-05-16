// import { Quote } from '@angular/compiler';
import { Component } from '@angular/core';
import { from } from 'rxjs';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes: Quote[]; 

  constructor(){
    this.quotes = [
      new Quote('Teach a man how to fish and you feed him for life','Jacob Stephens', 'Julie', 10),
      new Quote('A bird in hand is worth two in the bush', 'Jacob Stephens', 'Julie', 100),
      new Quote('What doesn\'t kill you makes you stronger', 'Jacob Stephens', 'Julie', 50),
      new Quote('Usiuwache mbachao kwa msala upitao', 'Jacob Stephens', 'Julie', 1),
    ];
  }

  addQuote(name: HTMLInputElement, quote: HTMLInputElement, author: HTMLInputElement): boolean{
    console.log(`Adding :
    ${name.value}, 
    ${quote.value},
    ${author.value}`);
    return false;
  }
}
