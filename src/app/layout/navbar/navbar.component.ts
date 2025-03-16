import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeIconsModule } from '../../shared/font-awesome.module';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { filter } from 'rxjs/operators';

// Navigation item interface
interface NavItem {
  label: string;
  routerLink: string;
  isExternal?: boolean;
  fragment?: string;
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
    FontAwesomeIconsModule,
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  // Icon sizes
  smallIconSize: SizeProp = 'sm';
  mediumIconSize: SizeProp = 'lg';

  // Navigation state
  isMenuOpen = false;

  // Main navigation items
  navItems: NavItem[] = [
    { label: 'Home', routerLink: '/' },
    { label: 'Services', routerLink: '/', fragment: 'features-and-services' },
    { label: 'About Us', routerLink: '/about' },
    { label: 'Agents', routerLink: '/agents' },
    { label: 'Careers', routerLink: '/careers' },
  ];

  constructor(private router: Router) {
    // Close menu on navigation
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeMenu();
      });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth > 768 && this.isMenuOpen) {
      this.closeMenu();
    }
  }
}
