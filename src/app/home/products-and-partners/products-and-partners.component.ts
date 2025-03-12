import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import {
  faCheck,
  faCirclePlay,
  faGlobe,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';

interface Item {
  id: string;
  name: string;
  tagline: string;
  description: string;
  color: string;
  textColor: string;
  borderColor: string;
  logo: string;
  features: string[];
  downloadable: boolean;
  deviceImage: string;
}

interface ItemsData {
  products: Item[];
  partners: Item[];
  [key: string]: Item[]; // Index signature to allow string indexing
}

@Component({
  selector: 'app-products-and-partners',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './products-and-partners.component.html',
  styleUrl: './products-and-partners.component.css',
})
export class ProductsAndPartnersComponent {
  activeTab: string = 'products';
  activeItem: string = 'tplus';

  // Font Awesome icons
  faCheck = faCheck;
  faApple = faApple;
  faGooglePlay = faGooglePlay;
  faCirclePlay = faCirclePlay;
  faGlobe = faGlobe;
  faDollarSign = faDollarSign;

  // Products and partners data
  items: ItemsData = {
    products: [
      {
        id: 'tplus',
        name: 'T-Plus',
        tagline: 'Mobile Wallet',
        description:
          "Somalia's first mobile wallet for seamless money transfers and payments.",
        color: 'from-tawakal-blue to-blue-600',
        textColor: 'text-tawakal-blue',
        borderColor: 'border-tawakal-blue',
        logo: '/images/tplus.webp',
        features: [
          'Send & Request Money',
          'Pay Merchants',
          'Mobile Money Integration',
        ],
        downloadable: true,
        deviceImage: '/images/mobile.webp',
      },
    ],
    partners: [
      {
        id: 'bananapay',
        name: 'Banana Pay',
        tagline: 'US Money Transfer Partner',
        description:
          'Our trusted partner for sending money from the US to friends and family abroad with ease.',
        color: 'from-yellow-500 to-amber-600',
        textColor: 'text-amber-500',
        borderColor: 'border-amber-500',
        logo: '/images/bananapay.png',
        features: ['US Bank Integration', 'Fast Delivery', 'Affordable Fees'],
        downloadable: true,
        deviceImage: '/images/mobile.webp',
      },
    ],
  };

  // Get the active data based on the selected tab and item
  get activeData(): Item | undefined {
    return this.items[this.activeTab].find(
      (item) => item.id === this.activeItem
    );
  }

  // Set default active item when switching tabs
  handleTabChange(tab: string): void {
    this.activeTab = tab;
    this.activeItem = this.items[tab][0].id;
  }

  setActiveItem(itemId: string): void {
    this.activeItem = itemId;
  }

  // Helper method to get tab button classes
  getTabClasses(tab: string): string {
    return this.activeTab === tab
      ? `bg-gradient-to-r ${
          tab === 'products'
            ? 'from-tawakal-green to-tawakal-blue'
            : 'from-tawakal-blue to-tawakal-red'
        } text-white shadow-md`
      : 'text-zinc-700 hover:bg-white/50 hover:text-zinc-900';
  }

  // Helper method to get item button classes
  getItemClasses(itemId: string): string {
    const item = this.items[this.activeTab].find((item) => item.id === itemId);
    return this.activeItem === itemId
      ? `bg-gradient-to-r ${item?.color} text-white shadow-md`
      : 'text-zinc-700 hover:bg-white/50 hover:text-zinc-900';
  }

  // Helper method to get item dot classes
  getItemDotClasses(itemId: string): string {
    const item = this.items[this.activeTab].find((item) => item.id === itemId);
    return this.activeItem === itemId
      ? `bg-gradient-to-r ${item?.color} shadow-md`
      : 'bg-white/70 backdrop-blur-sm border border-white/50';
  }

  // Helper method to get download button classes
  getDownloadButtonClasses(isApple: boolean): string {
    return `flex items-center justify-center bg-gradient-to-r ${
      isApple
        ? 'from-tawakal-green to-tawakal-blue'
        : 'from-tawakal-blue to-tawakal-red'
    } text-white rounded-xl px-3 py-3 shadow-md hover:shadow-lg transition-all duration-300 flex-1 min-w-[120px]`;
  }

  // Helper method for common card styling
  getCardClasses(): string {
    return 'bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 overflow-hidden';
  }

  // Helper method for tab container styling
  getTabContainerClasses(): string {
    return 'bg-white/80 backdrop-blur-md rounded-full p-1.5 shadow-lg border border-white/20 flex space-x-1';
  }

  // Helper method for notification styling
  getNotificationClasses(): string {
    return 'bg-white/90 backdrop-blur-md rounded-lg p-2 shadow-md z-30';
  }

  // Helper method for notification icon container
  getNotificationIconClasses(color: string): string {
    return `w-6 h-6 rounded-full bg-${color} flex items-center justify-center`;
  }
}
