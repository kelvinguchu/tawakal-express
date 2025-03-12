import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../home/hero/hero.component';
import { AboutComponent } from '../../home/about/about.component';
import { ProductsAndPartnersComponent } from '../../home/products-and-partners/products-and-partners.component';
import { TestimonialsComponent } from '../../home/testimonials/testimonials.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, AboutComponent, ProductsAndPartnersComponent, TestimonialsComponent],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-products-and-partners></app-products-and-partners>
    <app-testimonials></app-testimonials>
  `,
  styles: ``,
})
export class HomeComponent {

}
