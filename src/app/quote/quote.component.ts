import { Component, OnInit, HostBinding } from '@angular/core';
import { from } from 'rxjs';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  // @HostBinding('attr.class') cssClass = "row";
  quote: Quote;

  constructor() {
    this.quote = new Quote(
      'When life gives you lemons, make lemonade',
      'Jeremy WIlliams',
      'Mark',
      10
    );
   }

  voteUp(): boolean {
    this.quote.voteUp();
    return false;
  }
  voteDown(): boolean {
    this.quote.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
