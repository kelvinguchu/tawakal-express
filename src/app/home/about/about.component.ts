import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHandshake,
  faShieldHalved,
  faBolt,
  faUsers,
  faGlobe,
  faHeart,
  faArrowRight,
  faCheck,
  faClock,
  faMoneyBill,
  faLock,
  faMapMarkerAlt,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  // Font Awesome icons
  faHandshake = faHandshake;
  faShieldHalved = faShieldHalved;
  faBolt = faBolt;
  faUsers = faUsers;
  faGlobe = faGlobe;
  faHeart = faHeart;
  faArrowRight = faArrowRight;
  faCheck = faCheck;
  faClock = faClock;
  faMoneyBill = faMoneyBill;
  faLock = faLock;
  faMapMarkerAlt = faMapMarkerAlt;
  faCircle = faCircle;

  // Countries with direct branches
  branchCountries = [
    'Australia',
    'Canada',
    'Djibouti',
    'Ethiopia',
    'Kenya',
    'Norway',
    'Somalia',
    'South Sudan',
    'Sudan',
    'Sweden',
    'UAE',
    'Uganda',
    'UK',
    'USA',
  ];

  // Partner countries
  partnerCountries = [
    'Bangladesh',
    'Egypt',
    'India',
    'Indonesia',
    'Jordan',
    'Kuwait',
    'Lebanon',
    'Morocco',
    'Nepal',
    'Pakistan',
    'Philippines',
    'Sri Lanka',
  ];

  features = [
    {
      title: 'Global Reach',
      description:
        'Send money to over 50 countries worldwide with competitive exchange rates',
      icon: 'globe',
      color: 'tawakal-blue',
    },
    {
      title: 'Fast Transfers',
      description: 'Most transfers arrive within minutes, not days',
      icon: 'clock',
      color: 'tawakal-green',
    },
    {
      title: 'Secure & Reliable',
      description: 'Bank-level security with 24/7 transaction monitoring',
      icon: 'shield-check',
      color: 'tawakal-red',
    },
    {
      title: 'Low Fees',
      description: 'Transparent pricing with no hidden charges',
      icon: 'cash',
      color: 'emerald-500',
    },
  ];

  // Core values data
  coreValues = [
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
