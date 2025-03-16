import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeIconsModule } from '../../shared/font-awesome.module';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-features-and-services',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, FontAwesomeIconsModule],
  templateUrl: './features-and-services.component.html',
  styleUrl: './features-and-services.component.css',
})
export class FeaturesAndServicesComponent {
  // Icon size configuration
  smallIconSize: SizeProp = 'sm';
  mediumIconSize: SizeProp = 'lg';
  valueIconSize: SizeProp = '1x';

  // Converts icon names from camelCase to kebab-case
  getIconName(iconName: string): string {
    const nameWithoutPrefix = iconName.substring(2);
    return nameWithoutPrefix
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase();
  }

  // Financial services
  services = [
    {
      id: 'mobile-money',
      title: 'Mobile Money Transfer',
      description:
        'Send money directly to mobile wallets across East Africa with instant delivery and low fees.',
      icon: 'faMobileScreen',
      color: 'bg-blue-100 text-blue-600',
      features: [
        'Instant transfers to mobile wallets',
        'Low transaction fees',
        'Real-time tracking',
        'Secure authentication',
      ],
    },
    {
      id: 'individual-payment',
      title: 'Individual Payment',
      description:
        'Person-to-person money transfers with flexible pickup options including cash, bank deposit, and mobile wallet.',
      icon: 'faMoneyBillTransfer',
      color: 'bg-green-100 text-green-600',
      features: [
        'Multiple pickup options',
        'Competitive exchange rates',
        'Fast processing times',
        'ID verification for security',
      ],
    },
    {
      id: 'currency-exchange',
      title: 'Foreign Currency Exchange',
      description:
        'Exchange between multiple currencies with competitive rates and transparent fees.',
      icon: 'faMoneyBillWave',
      color: 'bg-yellow-100 text-yellow-600',
      features: [
        'Competitive exchange rates',
        'Multiple currency pairs',
        'No hidden fees',
        'Rate alerts and notifications',
      ],
    },
    {
      id: 'humanitarian',
      title: 'Humanitarian Money Transfer (HMT)',
      description:
        'Specialized services for NGOs and humanitarian organizations to distribute funds efficiently in crisis regions.',
      icon: 'faHandHoldingHeart',
      color: 'bg-red-100 text-red-600',
      features: [
        'Bulk payment processing',
        'Reduced fees for humanitarian work',
        'Dedicated support team',
        'Compliance with international regulations',
      ],
    },
    {
      id: 'mpesa',
      title: 'Mpesa Services',
      description:
        'Direct integration with Mpesa for seamless money transfers to and from Kenya.',
      icon: 'faHandHoldingDollar',
      color: 'bg-purple-100 text-purple-600',
      features: [
        'Direct Mpesa wallet deposits',
        'Business payment solutions',
        'Bill payment services',
        'API integration for businesses',
      ],
    },
    {
      id: 'business-payments',
      title: 'Business Payment Solutions',
      description:
        'Comprehensive payment solutions for businesses of all sizes operating in East Africa.',
      icon: 'faBuilding',
      color: 'bg-indigo-100 text-indigo-600',
      features: [
        'Bulk payment processing',
        'Payroll services',
        'Vendor payments',
        'Cross-border business transfers',
      ],
    },
  ];

  // Banking partners
  partnerBanks = [
    {
      name: 'Equity Bank',
      countries: ['Kenya', 'Uganda', 'Tanzania', 'Rwanda', 'South Sudan'],
      logo: 'equity.png',
      icon: 'faUniversity',
    },
    {
      name: 'KCB Bank Group',
      countries: [
        'Kenya',
        'Tanzania',
        'South Sudan',
        'Uganda',
        'Rwanda',
        'Burundi',
      ],
      logo: 'kcb.svg',
      icon: 'faUniversity',
    },
    {
      name: 'Commercial Bank of Ethiopia',
      countries: ['Ethiopia'],
      logo: 'bank-of-ethiopia.jpg',
      icon: 'faUniversity',
    },
    {
      name: 'Cooperative Bank',
      countries: ['Kenya', 'South Sudan'],
      logo: 'coop.jpeg',
      icon: 'faUniversity',
    },
    {
      name: 'CRDB Bank',
      countries: ['Tanzania', 'Burundi'],
      logo: 'crdb.svg',
      icon: 'faUniversity',
    },
    {
      name: 'Sombank',
      countries: ['Somalia'],
      logo: 'sombank.webp',
      icon: 'faUniversity',
    },
  ];

  // Mobile money providers
  mobileMoneyServices = [
    {
      name: 'M-Pesa',
      countries: ['Kenya', 'Tanzania'],
      provider: 'Safaricom/Vodacom',
      logo: 'mpesa.png',
      icon: 'faMobileScreen',
    },
    {
      name: 'Airtel Money',
      countries: ['Kenya', 'Uganda', 'Tanzania', 'Rwanda', 'Somalia'],
      provider: 'Airtel',
      logo: 'airtel.svg',
      icon: 'faMobileScreen',
    },
    {
      name: 'MTN Mobile Money',
      countries: ['Uganda', 'Rwanda', 'South Sudan'],
      provider: 'MTN',
      logo: 'mtn.svg',
      icon: 'faMobileScreen',
    },
    {
      name: 'Tigo Pesa',
      countries: ['Tanzania'],
      provider: 'Tigo',
      logo: 'tigo.avif',
      icon: 'faMobileScreen',
    },
    {
      name: 'EVC Plus',
      countries: ['Somalia'],
      provider: 'Hormuud Telecom',
      logo: 'evc.svg',
      icon: 'faMobileScreen',
    },
  ];

  // Partner ecosystem
  partnerEcosystem = [
    {
      name: 'Financial Networks',
      partners: ['T-Plus', 'Sombank', 'Major Banking Alliances'],
      icon: 'faHandshake',
    },
    {
      name: 'Mobile Money Platforms',
      partners: ['TerraPay', 'BananaPay', 'Urimt', 'SOM-MMT'],
      icon: 'faMobileScreen',
    },
    {
      name: 'Payment Processors',
      partners: ['Visa', 'Mastercard', 'Local Payment Networks'],
      icon: 'faCreditCard',
    },
    {
      name: 'Technology Partners',
      partners: [
        'Cloud Service Providers',
        'Security Solutions',
        'API Integrators',
      ],
      icon: 'faCode',
    },
  ];
}
