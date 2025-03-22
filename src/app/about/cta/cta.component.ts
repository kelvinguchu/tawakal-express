import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeIconsModule } from '../../shared/font-awesome.module';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, FontAwesomeIconsModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.css',
})
export class CtaComponent {
  constructor(private readonly router: Router) {}

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}
