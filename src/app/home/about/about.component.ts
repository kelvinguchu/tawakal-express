import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeIconsModule } from '../../shared/font-awesome.module';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FontAwesomeModule,
    FontAwesomeIconsModule,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  // Icon sizes
  smallIconSize: SizeProp = 'sm';
  mediumIconSize: SizeProp = 'lg';
  valueIconSize: SizeProp = '1x';

  // Helper method to convert icon names from the format 'faIconName' to 'icon-name'
  getIconName(iconName: string): string {
    // Remove the 'fa' prefix
    const nameWithoutPrefix = iconName.substring(2);

    // Convert camelCase to kebab-case
    return nameWithoutPrefix
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase();
  }

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

  // Service features
  features = [
    {
      title: 'Global Reach',
      description:
        'Send money to over 50 countries worldwide with competitive exchange rates',
      icon: 'faGlobe',
      color: 'tawakal-blue',
    },
    {
      title: 'Fast Transfers',
      description: 'Most transfers arrive within minutes, not days',
      icon: 'faClock',
      color: 'tawakal-green',
    },
    {
      title: 'Secure & Reliable',
      description: 'Bank-level security with 24/7 transaction monitoring',
      icon: 'faShieldHalved',
      color: 'tawakal-red',
    },
    {
      title: 'Low Fees',
      description: 'Transparent pricing with no hidden charges',
      icon: 'faMoneyBill',
      color: 'emerald-500',
    },
  ];

  // Core values data
  coreValues = [
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
