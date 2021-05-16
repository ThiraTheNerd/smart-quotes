import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { from } from 'rxjs';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  // @HostBinding('attr.class') cssClass = "row";

  @Input() quote: Quote;

  constructor() {}

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
