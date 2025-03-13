import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';

interface Partner {
  name: string;
  logo: string;
  alt: string;
}

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css',
})
export class PartnersComponent {
  faHandshake = faHandshake;

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

  // For marquee effect
  isPaused = false;

  // Duplicate partners for continuous scrolling
  get marqueePartners(): Partner[] {
    return [...this.partners, ...this.partners, ...this.partners];
  }

  pauseMarquee(): void {
    this.isPaused = true;
  }

  resumeMarquee(): void {
    this.isPaused = false;
  }
}
