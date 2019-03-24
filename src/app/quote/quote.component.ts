import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'Eleanor Roosevelt','“Great minds discuss ideas; average minds discuss events; small minds discuss people.”',new Date(2018,3,14)),
    new Quote(2,'David Brinkley','“A successful man is one who can lay a firm foundation with the bricks others have thrown at him.”',new Date(2018,3,14)),
    new Quote(3, '-John F. Kennedy','“Those who dare to fail miserably can achieve greatly.”',new Date(2018,3,14)),
    new Quote(4, 'Stephen King','“Get busy living or get busy dying.”',new Date(2018,3,14)),
    new Quote(5, 'Solve math homework','Damn Math',new Date(2018,3,14)),
    new Quote(6, 'Abraham Lincoln','“I’m a success today because I had a friend who believed in me and I didn’t have the heart to let him down.'
    ,new Date(2018,3,14)),
]
 


addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id=quoteLength+1;
  this.quotes.unshift(quote)

}


toogleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}





completeQuote(isComplete,index){
  if (isComplete){
      this.quotes.splice(index,1);
      }
      }


constructor() { }
ngOnInit() {
}
}
