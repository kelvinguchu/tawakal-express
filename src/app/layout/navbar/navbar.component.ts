import { Component, HostListener } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { Ripple } from 'primeng/ripple';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeIconsModule } from '../../shared/font-awesome.module';
import { SizeProp, IconProp } from '@fortawesome/fontawesome-svg-core';
import { filter } from 'rxjs/operators';

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
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    Ripple,
    FontAwesomeModule,
    FontAwesomeIconsModule,
    NgOptimizedImage,
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  // Icon sizes
  smallIconSize: SizeProp = 'sm';
  mediumIconSize: SizeProp = 'lg';

  // Navigation state
  isMenuOpen = false;
  isMobileDropdownOpen = false;

  // Main navigation items
  navItems: NavItem[] = [
    { label: 'Home', routerLink: '/' },
    { label: 'Services', routerLink: '/', fragment: 'features-and-services' },
    { label: 'About Us', routerLink: '/about' },
    {
      label: 'Agents',
      routerLink: '/agents',
      hasDropdown: true,
      dropdownItems: [
        {
          label: 'Find Agents',
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
  ];

  constructor(private readonly router: Router) {
    // Close menu on navigation
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeMenu();
        this.isMobileDropdownOpen = false;
      });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) {
      this.isMobileDropdownOpen = false;
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.isMobileDropdownOpen = false;
  }

  // Toggle dropdown menu for mobile
  toggleMobileDropdown() {
    this.isMobileDropdownOpen = !this.isMobileDropdownOpen;
  }

  // Navigate to a specific route
  navigateTo(route: string, fragment?: string) {
    this.router.navigate([route], { fragment: fragment });
    this.closeMenu();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth > 768 && this.isMenuOpen) {
      this.closeMenu();
    }
  }
}
