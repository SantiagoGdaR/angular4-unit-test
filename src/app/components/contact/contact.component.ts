import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {
    text = 'contact page';
    contactForm: FormGroup;
    contact = {
        name: '',
        email: '',
        text: ''
    };
    submitted = false;

    constructor() {
        this.createForm();
    }

    createForm(): void {
        this.contactForm = new FormGroup({
            'name': new FormControl(this.contact.name, [
                Validators.required,
                Validators.minLength(4)
            ]),
            'email': new FormControl(this.contact.email, [
                Validators.required,
                Validators.email
            ]),
            'text': new FormControl(this.contact.text, Validators.required)
        });
    }

    onSubmit(): void {
        this.submitted = true;
    }
}
