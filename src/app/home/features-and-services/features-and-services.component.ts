import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import {
  faMobileScreen,
  faMoneyBillTransfer,
  faMoneyBillWave,
  faHandHoldingDollar,
  faBuilding,
  faArrowRight,
  faGlobe,
  faHandHoldingHeart,
  faCreditCard,
  faShieldAlt,
  faChartLine,
  faUsers,
  faUniversity,
  faCheck,
  faMapMarkerAlt,
  faDownload,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-features-and-services',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './features-and-services.component.html',
  styleUrl: './features-and-services.component.css',
})
export class FeaturesAndServicesComponent {
  // Font Awesome icons
  faMobileScreen = faMobileScreen;
  faMoneyBillTransfer = faMoneyBillTransfer;
  faMoneyBillWave = faMoneyBillWave;
  faHandHoldingDollar = faHandHoldingDollar;
  faBuilding = faBuilding;
  faArrowRight = faArrowRight;
  faGlobe = faGlobe;
  faHandHoldingHeart = faHandHoldingHeart;
  faCreditCard = faCreditCard;
  faShieldAlt = faShieldAlt;
  faChartLine = faChartLine;
  faUsers = faUsers;
  faUniversity = faUniversity;
  faCheck = faCheck;
  faMapMarkerAlt = faMapMarkerAlt;
  faDownload = faDownload;
  faCircle = faCircle;

  // Icon sizes
  smallIconSize: SizeProp = 'sm';
  mediumIconSize: SizeProp = 'lg';
  valueIconSize: SizeProp = '1x';

  // Main services offered
  services = [
    {
      id: 'mobile-money',
      title: 'Mobile Money Transfer',
      description:
        'Send money directly to mobile wallets across East Africa with instant delivery and low fees.',
      icon: this.faMobileScreen,
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
      icon: this.faMoneyBillTransfer,
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
      icon: this.faMoneyBillWave,
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
      icon: this.faHandHoldingHeart,
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
      icon: this.faHandHoldingDollar,
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
      icon: this.faBuilding,
      color: 'bg-indigo-100 text-indigo-600',
      features: [
        'Bulk payment processing',
        'Payroll services',
        'Vendor payments',
        'Cross-border business transfers',
      ],
    },
  ];

  // Partner banks in East Africa
  partnerBanks = [
    {
      name: 'Equity Bank',
      countries: ['Kenya', 'Uganda', 'Tanzania', 'Rwanda', 'South Sudan'],
      logo: 'equity.png',
      icon: this.faUniversity,
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
      icon: this.faUniversity,
    },
    {
      name: 'Commercial Bank of Ethiopia',
      countries: ['Ethiopia'],
      logo: 'bank-of-ethiopia.jpg',
      icon: this.faUniversity,
    },
    {
      name: 'Cooperative Bank',
      countries: ['Kenya', 'South Sudan'],
      logo: 'coop.jpeg',
      icon: this.faUniversity,
    },
    {
      name: 'CRDB Bank',
      countries: ['Tanzania', 'Burundi'],
      logo: 'crdb.svg',
      icon: this.faUniversity,
    },
    {
      name: 'Sombank',
      countries: ['Somalia'],
      logo: 'sombank.webp',
      icon: this.faUniversity,
    },
  ];

  // Mobile money services in the region
  mobileMoneyServices = [
    {
      name: 'M-Pesa',
      countries: ['Kenya', 'Tanzania'],
      provider: 'Safaricom/Vodacom',
      logo: 'mpesa.png',
      icon: this.faMobileScreen,
    },
    {
      name: 'Airtel Money',
      countries: ['Kenya', 'Uganda', 'Tanzania', 'Rwanda', 'Somalia'],
      provider: 'Airtel',
      logo: 'airtel.svg',
      icon: this.faMobileScreen,
    },
    {
      name: 'MTN Mobile Money',
      countries: ['Uganda', 'Rwanda', 'South Sudan'],
      provider: 'MTN',
      logo: 'mtn.svg',
      icon: this.faMobileScreen,
    },
    {
      name: 'Tigo Pesa',
      countries: ['Tanzania'],
      provider: 'Tigo',
      logo: 'tigo.avif',
      icon: this.faMobileScreen,
    },
    {
      name: 'Halopesa',
      countries: ['Tanzania'],
      provider: 'Halotel',
      logo: 'halopesa.png',
      icon: this.faMobileScreen,
    },
    {
      name: 'EVC Plus',
      countries: ['Somalia'],
      provider: 'Hormuud Telecom',
      logo: 'evc.svg',
      icon: this.faMobileScreen,
    },
  ];
}
