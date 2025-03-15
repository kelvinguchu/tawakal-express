import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../../contact/contact/contact.component';

@Component({
  selector: 'app-contactpage',
  standalone: true,
  imports: [CommonModule, ContactComponent],
  template: `<app-contact></app-contact>`,
})
export class ContactPageComponent {}
