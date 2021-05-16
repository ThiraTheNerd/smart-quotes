import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  // @HostBinding('attr.class') cssClass = "row";
  votes: number;
  quote: string;
  author: string;
  name : string;

  constructor() {
    this.quote = `This is a wider card with supporting text below as a natural lead-in to it.`;
    this.author = 'Jeremy Williams';
    this.name = 'Mercy'
    this.votes = 0
   }

  voteUp(): boolean{
    this.votes += 1;
    return false;
  }
  voteDown(): boolean{
    this.votes -= 1;
    return false;
  }

  ngOnInit() {
  }

}
