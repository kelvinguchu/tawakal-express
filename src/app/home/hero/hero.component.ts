import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, RippleModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements AfterViewInit {
  // ViewChild to get reference to the 3D card container
  @ViewChild('card3dContainer') card3dContainer?: ElementRef;

  // Currency exchange rates for display
  exchangeRates = [
    { from: 'USD', to: 'KES', rate: 128.45, change: 0.2, trend: 'up' },
    { from: 'GBP', to: 'SOS', rate: 72.45, change: 1.5, trend: 'up' },
  ];

  // Countries available for money transfer
  countries = ['Somalia', 'Kenya', 'UAE', 'UK', 'USA'];

  // Mock transfer data
  transferAmount = 'KES 5,000';

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
    const particles = document.querySelectorAll('.particle');

    particles.forEach((particle: Element) => {
      // Set random translation values for each particle
      const tx = Math.random() * 200 - 100 + 'px';
      const ty = Math.random() * 200 - 100 + 'px';

      // Apply as CSS variables
      (particle as HTMLElement).style.setProperty('--tx', tx);
      (particle as HTMLElement).style.setProperty('--ty', ty);
    });
  }
}
