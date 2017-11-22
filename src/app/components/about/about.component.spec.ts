import { TestBed, async } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent
      ],
    }).compileComponents();
  }));

  it(`should have as text 'about page'`, async(() => {
    const fixture = TestBed.createComponent(AboutComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.text).toEqual('about page');
  }));
});
