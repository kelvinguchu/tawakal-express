import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../home/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  template: `
    <app-hero></app-hero>
  `,
  styles: ``,
})
export class HomeComponent {

}
