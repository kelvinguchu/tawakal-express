// This component is not used in the app, so it can be removed, or used in the future
import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeIconsModule } from '../../shared/font-awesome.module';

// Interface for partner data
interface Partner {
  name: string;
  logo: string;
  alt: string;
}

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    FontAwesomeIconsModule,
    NgOptimizedImage,
  ],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
})
export class PartnersComponent {
  // Partner logos
  partners: Partner[] = [
    {
      name: 'Sombank',
      logo: '/partners/sombank.webp',
      alt: 'Sombank Logo',
    },
    {
      name: 'Hormuud',
      logo: '/partners/hormuud.svg',
      alt: 'Hormuud Logo',
    },
    {
      name: 'Telesom',
      logo: '/partners/partner-telesom.png',
      alt: 'Telesom Logo',
    },
    {
      name: 'URemit',
      logo: '/partners/partner-uremit.png',
      alt: 'URemit Logo',
    },
    {
      name: 'Samsa',
      logo: '/partners/partner-samsa.png',
      alt: 'Samsa Logo',
    },
  ];

  // Marquee animation state
  isPaused = false;

  // Duplicate partners for continuous scrolling
  get marqueePartners(): Partner[] {
    return [...this.partners, ...this.partners, ...this.partners];
  }

  // Pause marquee on hover
  pauseMarquee(): void {
    this.isPaused = true;
  }

  // Resume marquee when not hovering
  resumeMarquee(): void {
    this.isPaused = false;
  }
}
