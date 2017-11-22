import { Component } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  text = 'home page';
  quoteText = 'this text is meant to be quoted';
}
