import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeIconsModule } from '../../shared/font-awesome.module';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-features-and-services',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    FontAwesomeIconsModule,
    NgOptimizedImage,
  ],
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
        'Connect Instantly, Pay Less: Send Money Across Africa! Seamless transfers directly to mobile wallets with instant delivery and industry-leading low fees.',
      icon: 'faMobileScreen',
      color: 'bg-blue-100 text-blue-600',
      features: [
        'Instant transfers to mobile wallets',
        'Low transaction fees',
        'Real-time tracking',
        'Comprehensive mobile options',
      ],
      providers: [
        { name: 'EVC-PLUS', logo: 'evc.svg' },
        { name: 'M-PESA', logo: 'mpesa.png' },
        { name: 'MTN', logo: 'mtn.svg' },
        { name: 'AIRTEL', logo: 'airtel.svg' },
        { name: 'ORANGE', logo: 'orange.png' },
        { name: 'ZAAD', logo: 'telesom.png' },
        { name: 'SAHAL', logo: 'sahal.png' },
        { name: 'VODACOM', logo: 'vodacom.svg' },
        { name: 'AFRICELL', logo: 'africell.png', needsBackground: true },
      ],
    },
    {
      id: 'mobile-wallet',
      title: 'Mobile Wallet Transfer',
      description:
        'Empower your finances with our seamless wallet-to-wallet transfers. Send money directly to digital wallets across Africa with lightning-fast processing and minimal fees.',
      icon: 'faCreditCard',
      color: 'bg-green-100 text-green-600',
      features: [
        'Wallet-to-wallet transfers',
        'Competitive exchange rates',
        'Fast processing times',
        'T-plus integration',
      ],
      providers: [{ name: 'T-plus', logo: '' }],
    },
    {
      id: 'bank-transfer',
      title: 'Bank Transfer',
      description:
        'Secure, reliable bank transfers that move with the speed of digital. Send money directly to bank accounts across Africa with instant delivery and minimal transaction costs.',
      icon: 'faBuilding',
      color: 'bg-yellow-100 text-yellow-600',
      features: [
        'Direct bank account deposits',
        'Multiple banking partners',
        'No hidden fees',
        'Fast transaction processing',
      ],
      providers: [{ name: 'Sombank', logo: 'sombank.webp' }],
    },
    {
      id: 'cash-pickup',
      title: 'Cash Pickup',
      description:
        'Convenient cash pickup service with an extensive network of agents. Offering flexible pickup options to ensure your money reaches its destination safely and quickly.',
      icon: 'faHandHoldingDollar',
      color: 'bg-red-100 text-red-600',
      features: [
        'Extensive agent network',
        'Flexible pickup options',
        'Same-day availability',
        'Competitive rates',
      ],
    },
    {
      id: 'humanitarian',
      title: 'Humanitarian Money Transfer (HMT)',
      description:
        'Specialized services designed for NGOs and humanitarian organizations operating in crisis regions. Distribute funds efficiently, securely, and with reduced fees for maximum impact.',
      icon: 'faHandHoldingHeart',
      color: 'bg-purple-100 text-purple-600',
      features: [
        'Bulk payment processing',
        'Reduced fees for humanitarian work',
        'Dedicated support team',
        'Compliance with international regulations',
      ],
    },
    {
      id: 'business-payments',
      title: 'Business Payment Solutions',
      description:
        'Comprehensive payment infrastructure for businesses of all sizes operating across Africa. Streamline operations with efficient payment systems tailored to your business needs.',
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

}
