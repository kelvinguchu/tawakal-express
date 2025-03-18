import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeIconsModule } from '../../shared/font-awesome.module';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    FontAwesomeIconsModule,
    Ripple,
    NgOptimizedImage,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  constructor(private router: Router) {}

  // Navigate to Somalia agents page
  goToSomaliaAgents(): void {
    this.router.navigate(['/agents/somalia']);
  }

  // Navigate to UK agents page
  goToUKAgents(): void {
    this.router.navigate(['/agents/uk']);
  }

  // Navigate to agent application page
  goToApply(): void {
    this.router.navigate(['/agents/apply']);
  }
}
