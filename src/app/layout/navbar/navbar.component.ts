import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, RippleModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isMenuOpen = false;
  servicesOpen = false;

  // PrimeNG menu items (can be used for future enhancements)
  serviceItems: MenuItem[] = [
    { label: 'Money Transfer', routerLink: '/services/money-transfer' },
    { label: 'Bulk Payment', routerLink: '/services/bulk-payment' },
    { label: 'Cross Border Payments', routerLink: '/services/cross-border' },
    { label: 'Partners', routerLink: '/services/partners' },
    { label: 'Become an Agent', routerLink: '/services/become-agent' },
    { label: 'Security', routerLink: '/services/security' },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth > 768 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}
