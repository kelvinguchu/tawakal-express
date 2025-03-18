import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
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

  // Services for footer - updated to match the services in features-and-services component
  serviceItems = [
    { label: 'Mobile Money Transfer', id: 'mobile-money' },
    { label: 'Individual Payment', id: 'individual-payment' },
    { label: 'Foreign Currency Exchange', id: 'currency-exchange' },
    { label: 'Humanitarian Money Transfer', id: 'humanitarian' },
    { label: 'Mpesa Services', id: 'mpesa' },
    { label: 'Business Payment Solutions', id: 'business-payments' },
  ];

  // Quick links for footer
  quickLinks = [
    { label: 'Home', routerLink: '/' },
    { label: 'About Us', routerLink: '/about' },
    { label: 'Services', routerLink: '/', fragment: 'features-and-services' },
    { label: 'Agents', routerLink: '/agents' },
    { label: 'Careers', routerLink: '/careers' },
    { label: 'Contact', routerLink: '/contact' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // Method to navigate to the features-and-services section
  navigateToService(serviceId: string): void {
    this.router
      .navigate(['/'], { fragment: 'features-and-services' })
      .then(() => {
        setTimeout(() => {
          const element = document.getElementById(serviceId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 300);
      });
  }
}
