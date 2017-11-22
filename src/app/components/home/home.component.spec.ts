import { QuoteTextComponent } from './../quote-text/quote-text.component';
import { TestBed, async } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        QuoteTextComponent
      ],
    }).compileComponents();
  }));

  it(`should have as text 'home page'`, async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.text).toEqual('home page');
  }));
});
