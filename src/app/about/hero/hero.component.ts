import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGlobe,
  faHandshake,
  faHeart,
  faShieldHalved,
  faUsers,
  faArrowRight,
  faBolt,
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
export class HeroComponent {
  // Font Awesome icons
  faGlobe = faGlobe;
  faHandshake = faHandshake;
  faHeart = faHeart;
  faShieldHalved = faShieldHalved;
  faUsers = faUsers;
  faArrowRight = faArrowRight;
  faBolt = faBolt;

  // Icon sizes
  smallIconSize: SizeProp = 'sm';
  mediumIconSize: SizeProp = 'lg';
  valueIconSize: SizeProp = '1x';

  // Years of experience
  yearsOfExperience = 40;

  // Company values for display - copied from about.component.ts
  companyValues = [
    {
      icon: faHandshake,
      title: 'Trust & Reliability',
      description:
        'We build trust through consistent, reliable service and transparent operations, ensuring our customers can depend on us for their financial needs.',
      color: 'blue',
    },
    {
      icon: faShieldHalved,
      title: 'Security & Compliance',
      description:
        'We prioritize the security of every transaction and adhere to the highest regulatory standards to protect our customers and their money.',
      color: 'green',
    },
    {
      icon: faBolt,
      title: 'Speed & Efficiency',
      description:
        'We understand the urgency of money transfers and strive to deliver fast, efficient service without compromising on quality or security.',
      color: 'gold',
    },
    {
      icon: faUsers,
      title: 'Community Focus',
      description:
        "We're deeply connected to the communities we serve and committed to making a positive impact through our services and community initiatives.",
      color: 'red',
    },
    {
      icon: faGlobe,
      title: 'Global Perspective',
      description:
        'We embrace diversity and maintain a global outlook, adapting our services to meet the unique needs of customers across different regions and cultures.',
      color: 'blue',
    },
    {
      icon: faHeart,
      title: 'Customer-Centric',
      description:
        'We put our customers at the heart of everything we do, listening to their needs and continuously improving our services to exceed their expectations.',
      color: 'green',
    },
  ];
}
