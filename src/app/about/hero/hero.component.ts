import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeIconsModule } from '../../shared/font-awesome.module';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FontAwesomeIconsModule,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  // Icon sizes
  smallIconSize: SizeProp = 'sm';
  mediumIconSize: SizeProp = 'lg';
  valueIconSize: SizeProp = '1x';

  // Years of experience
  yearsOfExperience = 40;

  getIconName(iconName: string): string {
    const nameWithoutPrefix = iconName.substring(2);
    return nameWithoutPrefix
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase();
  }

  // Company values for display
  companyValues = [
    {
      icon: 'faHandshake',
      title: 'Trust & Reliability',
      description:
        'We build trust through consistent, reliable service and transparent operations, ensuring our customers can depend on us for their financial needs.',
      color: 'blue',
    },
    {
      icon: 'faShieldHalved',
      title: 'Security & Compliance',
      description:
        'We prioritize the security of every transaction and adhere to the highest regulatory standards to protect our customers and their money.',
      color: 'green',
    },
    {
      icon: 'faBolt',
      title: 'Speed & Efficiency',
      description:
        'We understand the urgency of money transfers and strive to deliver fast, efficient service without compromising on quality or security.',
      color: 'gold',
    },
    {
      icon: 'faUsers',
      title: 'Community Focus',
      description:
        "We're deeply connected to the communities we serve and committed to making a positive impact through our services and community initiatives.",
      color: 'red',
    },
    {
      icon: 'faGlobe',
      title: 'Global Perspective',
      description:
        'We embrace diversity and maintain a global outlook, adapting our services to meet the unique needs of customers across different regions and cultures.',
      color: 'blue',
    },
    {
      icon: 'faHeart',
      title: 'Customer-Centric',
      description:
        'We put our customers at the heart of everything we do, listening to their needs and continuously improving our services to exceed their expectations.',
      color: 'green',
    },
  ];
}
