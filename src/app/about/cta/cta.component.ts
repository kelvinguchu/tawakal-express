import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.css',
})
export class CtaComponent {
  faArrowRight = faArrowRight;

  constructor(private router: Router) {}

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}
