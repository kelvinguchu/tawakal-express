import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronDown,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

interface NavItem {
  label: string;
  routerLink: string;
  isExternal?: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    RippleModule,
    FontAwesomeModule,
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  // Font Awesome icons
  faChevronDown = faChevronDown;
  faBars = faBars;
  faTimes = faTimes;

  // Icon size for mobile menu toggle 
  mobileIconSize: SizeProp = 'lg';

  isMenuOpen = false;
  servicesOpen = false;

  // Main navigation items
  navItems: NavItem[] = [
    { label: 'Home', routerLink: '/' },
    { label: 'About Us', routerLink: '/about' },
    { label: 'Agents', routerLink: '/demographic-report' },
    { label: 'Careers', routerLink: '/careers' },
  ];

  // Services dropdown items
  serviceItems: NavItem[] = [
    { label: 'Money Transfer', routerLink: '/services/money-transfer' },
    { label: 'Bulk Payment', routerLink: '/services/bulk-payment' },
    { label: 'Cross Border Payments', routerLink: '/services/cross-border' },
    { label: 'Partners', routerLink: '/services/partners' },
    { label: 'Become an Agent', routerLink: '/services/become-agent' },
    { label: 'Security', routerLink: '/services/security' },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    // Close services dropdown when closing the menu
    if (!this.isMenuOpen) {
      this.servicesOpen = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth > 768 && this.isMenuOpen) {
      this.isMenuOpen = false;
      this.servicesOpen = false;
    }
  }
}
