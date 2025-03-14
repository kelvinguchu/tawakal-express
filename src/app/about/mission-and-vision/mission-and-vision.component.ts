import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faLightbulb,
  faCompass,
  faHandshake,
  faUsers,
  faGlobe,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-mission-and-vision',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './mission-and-vision.component.html',
  styleUrl: './mission-and-vision.component.css',
})
export class MissionAndVisionComponent {
  // Icons
  faLightbulb = faLightbulb;
  faCompass = faCompass;
  faHandshake = faHandshake;
  faUsers = faUsers;
  faGlobe = faGlobe;
  faChartLine = faChartLine;

  // Icon sizes
  smallIconSize: SizeProp = 'sm';
  mediumIconSize: SizeProp = 'lg';
  largeIconSize: SizeProp = '2x';

  // Mission and Vision data
  mission = {
    title: 'Our Mission',
    description:
      'To make our customers lives a whole lot brighter by providing reliable, secure, and efficient money transfer services that connect families and businesses across the globe.',
    icon: this.faCompass,
    color: 'blue',
  };

  vision = {
    title: 'Our Vision',
    description:
      'To be the leading financial services provider for the global diaspora, recognized for our innovation, reliability, and commitment to customer satisfaction.',
    icon: this.faLightbulb,
    color: 'green',
  };

  // Strategic pillars
  strategicPillars = [
    {
      title: 'Customer-Centric Approach',
      description:
        'We put our customers at the heart of everything we do, continuously improving our services to meet their evolving needs.',
      icon: this.faUsers,
      color: 'blue',
    },
    {
      title: 'Global Reach',
      description:
        'We aim to expand our presence to serve more communities worldwide, bringing our services closer to those who need them.',
      icon: this.faGlobe,
      color: 'green',
    },
    {
      title: 'Technological Innovation',
      description:
        'We leverage cutting-edge technology to enhance security, speed, and convenience in all our financial services.',
      icon: this.faChartLine,
      color: 'gold',
    },
    {
      title: 'Community Development',
      description:
        'We are committed to supporting the communities we serve through various initiatives and partnerships.',
      icon: this.faHandshake,
      color: 'red',
    },
  ];
}
