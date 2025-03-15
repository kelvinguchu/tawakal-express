import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faClock,
  faGlobe,
  faArrowRight,
  faCheck,
  faShieldHalved,
  faMoneyBillTransfer,
  faHandshake,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  // Font Awesome icons
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLocationDot = faLocationDot;
  faClock = faClock;
  faGlobe = faGlobe;
  faArrowRight = faArrowRight;
  faCheck = faCheck;
  faShieldHalved = faShieldHalved;
  faMoneyBillTransfer = faMoneyBillTransfer;
  faHandshake = faHandshake;
  faPaperPlane = faPaperPlane;

  // Icon sizes
  smallIconSize: SizeProp = 'sm';
  mediumIconSize: SizeProp = 'lg';

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
