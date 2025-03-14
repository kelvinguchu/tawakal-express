import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHistory,
  faGlobe,
  faHandshake,
  faMobileScreen,
  faBuilding,
  faCircle,
  faAward,
  faCheck,
  faArrowRight,
  faQuoteLeft,
  faImage,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  image?: string;
  imageAlt?: string;
}

interface Partner {
  name: string;
  logo: string;
  alt: string;
}

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './story.component.html',
  styleUrl: './story.component.css',
})
export class StoryComponent {
  // Font Awesome icons
  faHistory = faHistory;
  faGlobe = faGlobe;
  faHandshake = faHandshake;
  faMobileScreen = faMobileScreen;
  faBuilding = faBuilding;
  faCircle = faCircle;
  faAward = faAward;
  faCheck = faCheck;
  faArrowRight = faArrowRight;
  faQuoteLeft = faQuoteLeft;
  faImage = faImage;
  faMapMarkerAlt = faMapMarkerAlt;

  // Icon sizes
  smallIconSize: SizeProp = 'sm';
  mediumIconSize: SizeProp = 'lg';
  timelineIconSize: SizeProp = '1x';

  // For marquee effect
  isPaused = false;

  // Partners for marquee
  partners: Partner[] = [
    {
      name: 'M-Pesa',
      logo: '/features-and-services/mpesa.png',
      alt: 'M-Pesa Logo',
    },
    {
      name: 'MTN',
      logo: '/features-and-services/mtn.svg',
      alt: 'MTN Logo',
    },
    {
      name: 'Airtel',
      logo: '/features-and-services/airtel.svg',
      alt: 'Airtel Logo',
    },
    {
      name: 'Tigo',
      logo: '/features-and-services/tigo.avif',
      alt: 'Tigo Logo',
    },
    {
      name: 'EVC Plus',
      logo: '/features-and-services/evc.svg',
      alt: 'EVC Plus Logo',
    },
    {
      name: 'Halopesa',
      logo: '/features-and-services/halopesa.png',
      alt: 'Halopesa Logo',
    },
    {
      name: 'Equity Bank',
      logo: '/features-and-services/equity.png',
      alt: 'Equity Bank Logo',
    },
  ];

  // Duplicate partners for continuous scrolling
  get marqueePartners(): Partner[] {
    return [...this.partners, ...this.partners];
  }

  pauseMarquee(): void {
    this.isPaused = true;
  }

  resumeMarquee(): void {
    this.isPaused = false;
  }

  // Company timeline events with images
  timelineEvents: TimelineEvent[] = [
    {
      year: '2006',
      title: 'Foundation of Tawakal Express',
      description:
        'Tawakal Express was founded with a mission to provide reliable money transfer services to the East African community, starting with our first office in Somalia.',
      icon: faBuilding,
      color: 'from-tawakal-green to-tawakal-green',
      image: '/images/somalia.webp',
      imageAlt: 'Somalia office opening',
    },
    {
      year: '2010',
      title: 'International Expansion',
      description:
        'Expanded operations to multiple countries, establishing a global network of agents and partners with key locations in the UK, USA, and Sweden.',
      icon: faGlobe,
      color: 'from-tawakal-blue to-tawakal-blue',
      image: '/images/globe.webp',
      imageAlt: 'Global expansion map',
    },
    {
      year: '2015',
      title: 'Digital Transformation',
      description:
        'Launched our first mobile app and digital platforms including E-Tawakal, Banana Pay, and T-Plus, marking the beginning of our digital transformation journey.',
      icon: faMobileScreen,
      color: 'from-tawakal-blue to-tawakal-green',
      image: '/images/iphone-macbook.webp',
      imageAlt: 'Digital platforms launch',
    },
    {
      year: '2020',
      title: 'Award-Winning Services',
      description:
        'Recognized for excellence in financial services with multiple industry awards for innovation and customer satisfaction, cementing our position as a leader in the market.',
      icon: faAward,
      color: 'from-tawakal-green to-tawakal-blue',
      image: '/images/dollars.webp',
      imageAlt: 'Award ceremony',
    },
  ];

  // Global presence
  globalPresence = [
    {
      country: 'United Kingdom',
      image: '/images/uk.webp',
    },
    {
      country: 'United States',
      image: '/images/usa.webp',
    },
    {
      country: 'Sweden',
      image: '/images/sweden.webp',
    },
    {
      country: 'Kenya',
      image: '/images/nairobi.webp',
    },
  ];
}
