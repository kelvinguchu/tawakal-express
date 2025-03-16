import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeIconsModule } from '../../shared/font-awesome.module';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-mission-and-vision',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, FontAwesomeIconsModule],
  templateUrl: './mission-and-vision.component.html',
  styleUrl: './mission-and-vision.component.css',
})
export class MissionAndVisionComponent {
  // Font Awesome icon sizes 
  // (kinda the only approach that worked for me, sizing them in tailwind not working)
  smallIconSize: SizeProp = 'sm';
  mediumIconSize: SizeProp = 'lg';
  largeIconSize: SizeProp = '2x';

  // Converts faIconName to kebab-case for FaIconLibrary
  getIconName(iconName: string): string {
    return iconName
      .substring(2)
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase();
  }

  // Mission and Vision data
  mission = {
    title: 'Our Mission',
    description:
      'To make our customers lives a whole lot brighter by providing reliable, secure, and efficient money transfer services that connect families and businesses across the globe.',
    icon: 'faCompass',
    color: 'blue',
  };

  vision = {
    title: 'Our Vision',
    description:
      'To be the leading financial services provider for the global diaspora, recognized for our innovation, reliability, and commitment to customer satisfaction.',
    icon: 'faLightbulb',
    color: 'green',
  };

  // Strategic pillars
  strategicPillars = [
    {
      title: 'Customer-Centric Approach',
      description:
        'We put our customers at the heart of everything we do, continuously improving our services to meet their evolving needs.',
      icon: 'faUsers',
      color: 'blue',
    },
    {
      title: 'Global Reach',
      description:
        'We aim to expand our presence to serve more communities worldwide, bringing our services closer to those who need them.',
      icon: 'faGlobe',
      color: 'green',
    },
    {
      title: 'Technological Innovation',
      description:
        'We leverage cutting-edge technology to enhance security, speed, and convenience in all our financial services.',
      icon: 'faChartLine',
      color: 'gold',
    },
    {
      title: 'Community Development',
      description:
        'We are committed to supporting the communities we serve through various initiatives and partnerships.',
      icon: 'faHandshake',
      color: 'red',
    },
  ];
}
