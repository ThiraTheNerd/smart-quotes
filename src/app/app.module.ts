import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { PipesPipe } from './pipes.pipe';
import { DateAgoPipe } from './date-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    PipesPipe,
    DateAgoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
