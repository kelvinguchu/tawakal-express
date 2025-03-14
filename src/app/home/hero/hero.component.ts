import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { isPlatformBrowser } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCheck,
  faDownload,
  faMapMarkerAlt,
  faArrowRight,
  faLock,
  faGlobe,
  faDollarSign,
  faPoundSign,
  faEuroSign,
  faStar,
  faArrowUp,
  faChartLine,
  faShield,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    RippleModule,
    FontAwesomeModule,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements AfterViewInit {
  // Font Awesome icons
  faCheck = faCheck;
  faDownload = faDownload;
  faMapMarkerAlt = faMapMarkerAlt;
  faArrowRight = faArrowRight;
  faLock = faLock;
  faGlobe = faGlobe;
  faDollarSign = faDollarSign;
  faPoundSign = faPoundSign;
  faEuroSign = faEuroSign;
  faStar = faStar;
  faArrowUp = faArrowUp;
  faChartLine = faChartLine;
  faShield = faShield;
  faCircle = faCircle;

  // Icon sizes
  smallIconSize: SizeProp = 'sm';
  mediumIconSize: SizeProp = 'lg';
  rateIconSize: SizeProp = '1x';

  // ViewChild to get reference to the 3D card container
  @ViewChild('card3dContainer') card3dContainer?: ElementRef;

  // Currency exchange rates for display
  exchangeRates = [
    {
      from: 'USD',
      to: 'KES',
      rate: 128.45,
      change: 0.2,
      trend: 'up',
      icon: faDollarSign,
      color: 'green',
      duration: '8s',
    },
    {
      from: 'GBP',
      to: 'SOS',
      rate: 72.45,
      change: 1.5,
      trend: 'up',
      icon: faPoundSign,
      color: 'blue',
      duration: '7s',
      delay: '0.5s',
    },
  ];

  // Countries available for money transfer
  countries = [
    { name: 'Somalia', highlight: false },
    { name: 'Kenya', highlight: false },
    { name: 'UAE', highlight: true },
    { name: 'UK', highlight: false },
    { name: 'USA', highlight: false },
  ];

  // Stars for rating
  stars = Array(5).fill(0);

  // Trust indicators for display
  trustIndicators = [
    { icon: faStar, text: '4.9/5 (2.3k reviews)', color: 'text-yellow-400' },
    { icon: faLock, text: 'Secure Transactions', color: 'text-tawakal-green' },
  ];

  // Number of particles to display
  particles = Array(8).fill(0);

  // Mock transfer data
  transferAmount = 'KES 5,000';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    this.initCard3DEffect();
    this.initParticleEffects();
  }

  // Initialize 3D card effect that follows mouse movement
  private initCard3DEffect() {
    if (!this.card3dContainer) return;

    const card = this.card3dContainer.nativeElement.querySelector('.card-3d');
    if (!card) return;

    const container = this.card3dContainer.nativeElement;

    // Add event listeners for mouse movement
    container.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top; // y position within the element

      // Calculate rotation based on mouse position
      // Convert to percentage of container width/height
      const xPercent = (x / rect.width - 0.5) * 2; // -1 to 1
      const yPercent = (y / rect.height - 0.5) * 2; // -1 to 1

      // Apply rotation (reversed for natural feel)
      card.style.transform = `
        perspective(1000px)
        rotateY(${xPercent * 10}deg)
        rotateX(${-yPercent * 10}deg)
        translateZ(10px)
      `;

      // Move holographic effect based on mouse position
      const holographic = card.querySelector('.holographic-effect');
      if (holographic) {
        holographic.style.backgroundPosition = `${x / 5}px ${y / 5}px`;
      }
    });

    // Reset card position when mouse leaves
    container.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(0px)';
    });
  }

  // Initialize particle effects with random movement
  private initParticleEffects() {
    // Only run document-dependent code in the browser
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const particlesContainer = document.getElementById('particles-container');
    if (particlesContainer) {
      const particles = particlesContainer.querySelectorAll('.particle');
      particles.forEach((particle: Element) => {
        const tx = Math.random() * 200 - 100 + 'px';
        const ty = Math.random() * 200 - 100 + 'px';
        (particle as HTMLElement).style.setProperty('--tx', tx);
        (particle as HTMLElement).style.setProperty('--ty', ty);
      });
    }
  }
}
