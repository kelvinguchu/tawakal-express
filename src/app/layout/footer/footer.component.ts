import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeIconsModule } from '../../shared/font-awesome.module';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FontAwesomeIconsModule,
    NgOptimizedImage,
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  // Icon sizes
  smallIconSize: SizeProp = 'sm';
  mediumIconSize: SizeProp = 'lg';

  // Helper method to convert icon names from the format 'faIconName' to 'icon-name'
  getIconName(iconName: string): string {
    const nameWithoutPrefix = iconName.substring(2);
    return nameWithoutPrefix
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase();
  }

  currentYear: number = new Date().getFullYear();

  // Services for footer
  serviceItems = [
    { label: 'Money Transfer', routerLink: '/services/money-transfer' },
    { label: 'Bill Payment', routerLink: '/services/bill-payment' },
    { label: 'Mobile Top-up', routerLink: '/services/mobile-top-up' },
    { label: 'Business Solutions', routerLink: '/services/business' },
    { label: 'Currency Exchange', routerLink: '/services/currency-exchange' },
  ];

  // Quick links for footer
  quickLinks = [
    { label: 'Home', routerLink: '/' },
    { label: 'About Us', routerLink: '/about' },
    { label: 'Services', routerLink: '/services' },
    { label: 'Agents', routerLink: '/agents' },
    { label: 'Careers', routerLink: '/careers' },
    { label: 'Contact', routerLink: '/contact' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
