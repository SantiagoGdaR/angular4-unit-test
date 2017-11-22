import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let comp: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(ContactComponent);

      comp = fixture.componentInstance; // ContactComponent test instance
      // query for the title <h1> by CSS element selector
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));

  it(`should have as text 'contact page'`, async(() => {
    expect(comp.text).toEqual('contact page');
  }));

  it(`should set submitted to true`, async(() => {
    comp.onSubmit();
    expect(comp.submitted).toBeTruthy();
  }));

  it(`should call the onSubmit method`, async(() => {
    spyOn(comp, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(comp.onSubmit).toHaveBeenCalled();
  }));

 it(`form should be invalid`, async(() => {
    comp.contactForm.controls['email'].setValue('');
    comp.contactForm.controls['name'].setValue('');
    comp.contactForm.controls['text'].setValue('');
    expect(comp.contactForm.valid).toBeFalsy();
  }));

  it(`form should be valid`, async(() => {
    comp.contactForm.controls['email'].setValue('asd@asd.com');
    comp.contactForm.controls['name'].setValue('aada');
    comp.contactForm.controls['text'].setValue('text');
    expect(comp.contactForm.valid).toBeTruthy();
  }));
});
