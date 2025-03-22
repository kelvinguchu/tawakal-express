import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeIconsModule } from '../../shared/font-awesome.module';
import { SizeProp, IconProp } from '@fortawesome/fontawesome-svg-core';

// Dropdown item interface
interface DropdownItem {
  label: string;
  routerLink: string;
  icon: IconProp;
}

// Navigation item interface
interface NavItem {
  label: string;
  routerLink: string;
  isExternal?: boolean;
  fragment?: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

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
})
export class FooterComponent {
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

  // Quick links for footer with updated agents dropdown
  quickLinks: NavItem[] = [
    { label: 'Home', routerLink: '/' },
    { label: 'About Us', routerLink: '/about' },
    { label: 'Services', routerLink: '/', fragment: 'features-and-services' },
    {
      label: 'Agents',
      routerLink: '/agents',
      hasDropdown: true,
      dropdownItems: [
        {
          label: 'View Agents',
          routerLink: '/agents',
          icon: ['fas', 'search-location'] as IconProp,
        },
        {
          label: 'Become An Agent',
          routerLink: '/agents/apply',
          icon: ['fas', 'handshake'] as IconProp,
        },
      ],
    },
    { label: 'Careers', routerLink: '/careers' },
    { label: 'Contact', routerLink: '/contact' },
  ];

  // Track whether dropdowns are expanded
  expandedDropdowns: { [key: string]: boolean } = {};

  constructor(private readonly router: Router) {}

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

  // Method to toggle a dropdown
  toggleDropdown(label: string): void {
    this.expandedDropdowns[label] = !this.expandedDropdowns[label];
  }

  // Check if a dropdown is expanded
  isDropdownExpanded(label: string): boolean {
    return this.expandedDropdowns[label] === true;
  }

  // Navigate to a route
  navigateToRoute(route: string, fragment?: string): void {
    this.router.navigate([route], { fragment: fragment });
  }
}
