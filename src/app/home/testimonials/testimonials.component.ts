import {
  Component,
  OnInit,
  HostListener,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeIconsModule } from '../../shared/font-awesome.module';

// Interface for testimonial data
interface Testimonial {
  id: number;
  quote: string;
  location: string;
  rating: number;
  service: string;
  serviceColor: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, FontAwesomeIconsModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent implements OnInit {
  // Active testimonial index
  activeIndex: number = 0;
  visibleTestimonials: Testimonial[] = [];
  itemsPerPage: number = 3;
  totalPages: number = 0;
  currentPage: number = 0;

  // Marquee properties
  firstRowTestimonials: Testimonial[] = [];
  secondRowTestimonials: Testimonial[] = [];
  marqueeTestimonials: Testimonial[] = [];
  isPaused: boolean = false;

  // Testimonials data
  testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        "I've been sending money to my family in Somalia for years, and Tawakal Express has made it so much easier. The funds arrive within minutes, and the app is incredibly simple to use.",
      location: 'Minneapolis, USA',
      rating: 5,
      service: 'Money Transfer',
      serviceColor: 'tawakal-green',
    },
    {
      id: 2,
      quote:
        "The exchange rates are the best I've found, and the fees are transparent. No hidden charges or surprises when my family receives the money. That peace of mind is priceless.",
      location: 'London, UK',
      rating: 5,
      service: 'Currency Exchange',
      serviceColor: 'tawakal-blue',
    },
    {
      id: 3,
      quote:
        'When my son needed emergency funds while studying abroad, Tawakal Express delivered the money within 10 minutes. Their customer service was exceptional throughout the process.',
      location: 'Nairobi, Kenya',
      rating: 5,
      service: 'Emergency Transfer',
      serviceColor: 'tawakal-red',
    },
    {
      id: 4,
      quote:
        'As a small business owner, I need reliable payment solutions. Their business services have streamlined how I pay international suppliers and receive payments from global customers.',
      location: 'Dubai, UAE',
      rating: 4,
      service: 'Business Services',
      serviceColor: 'amber-500',
    },
    {
      id: 5,
      quote:
        "The mobile app is a game-changer. I can send money, check rates, and track transfers all from my phone. It's made supporting my parents back home so much more convenient.",
      location: 'Toronto, Canada',
      rating: 5,
      service: 'Mobile App',
      serviceColor: 'tawakal-blue',
    },
    {
      id: 6,
      quote:
        'I was skeptical about digital transfers at first, but their security measures are impressive. The verification process is thorough without being cumbersome. I feel safe using their services.',
      location: 'Stockholm, Sweden',
      rating: 5,
      service: 'Secure Transfers',
      serviceColor: 'tawakal-green',
    },
    {
      id: 7,
      quote:
        'What stands out is how they understand the communities they serve. The staff speaks my language and understands the urgency when I need to send money home for important occasions.',
      location: 'Oslo, Norway',
      rating: 4,
      service: 'Customer Service',
      serviceColor: 'purple-500',
    },
    {
      id: 8,
      quote:
        "I've tried many money transfer services, but Tawakal Express offers the perfect balance of speed, cost, and reliability. My family no longer has to wait days to receive funds.",
      location: 'Melbourne, Australia',
      rating: 5,
      service: 'Fast Delivery',
      serviceColor: 'tawakal-red',
    },
    {
      id: 9,
      quote:
        'Their partnership with local banks in my home country means my relatives can collect the money easily without traveling long distances. This attention to detail makes all the difference.',
      location: 'Djibouti City, Djibouti',
      rating: 4,
      service: 'Local Partnerships',
      serviceColor: 'teal-500',
    },
    {
      id: 10,
      quote:
        'During the pandemic, when many services were disrupted, Tawakal Express remained reliable. They adapted quickly to ensure we could still support our loved ones during a critical time.',
      location: 'Kampala, Uganda',
      rating: 5,
      service: 'Reliable Service',
      serviceColor: 'tawakal-blue',
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Only access window if in browser environment
    if (isPlatformBrowser(this.platformId)) {
      this.adjustItemsPerPage(window.innerWidth);
    } else {
      // Default for server-side rendering
      this.adjustItemsPerPage(1024); // Default to desktop size
    }

    this.totalPages = Math.ceil(this.testimonials.length / this.itemsPerPage);
    this.updateVisibleTestimonials();

    // Set up the marquee
    this.setupMarqueeRows();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    // Only run in browser environment
    if (isPlatformBrowser(this.platformId)) {
      this.adjustItemsPerPage(event.target.innerWidth);
      this.totalPages = Math.ceil(this.testimonials.length / this.itemsPerPage);

      // Ensure current page is still valid
      if (this.currentPage >= this.totalPages) {
        this.currentPage = this.totalPages - 1;
      }

      this.updateVisibleTestimonials();
    }
  }

  // Adjust items per page based on screen width
  adjustItemsPerPage(width: number): void {
    if (width < 768) {
      this.itemsPerPage = 1;
    } else if (width < 1024) {
      this.itemsPerPage = 2;
    } else {
      this.itemsPerPage = 3;
    }
  }

  // Update visible testimonials based on current page
  updateVisibleTestimonials(): void {
    const startIndex = this.currentPage * this.itemsPerPage;
    this.visibleTestimonials = this.testimonials.slice(
      startIndex,
      startIndex + this.itemsPerPage
    );
  }

  // Navigation methods
  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updateVisibleTestimonials();
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updateVisibleTestimonials();
    }
  }

  goToPage(pageIndex: number): void {
    if (pageIndex >= 0 && pageIndex < this.totalPages) {
      this.currentPage = pageIndex;
      this.updateVisibleTestimonials();
    }
  }

  // Set up the testimonials for the marquee
  setupMarqueeRows(): void {
    // Create a single marquee with duplicated testimonials for seamless scrolling
    this.marqueeTestimonials = [
      ...this.testimonials,
      ...this.testimonials,
      ...this.testimonials,
    ];
  }

  // Marquee control methods
  pauseMarquee(): void {
    this.isPaused = true;
  }

  resumeMarquee(): void {
    this.isPaused = false;
  }

  // Helper method to generate star rating
  getStarArray(rating: number): number[] {
    return Array(rating).fill(0);
  }

  // Helper method for testimonial card styling
  getCardClasses(): string {
    return 'bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 overflow-hidden relative';
  }

  // Helper method for pagination dot classes
  getPaginationDotClasses(index: number): string {
    return this.currentPage === index
      ? 'w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-tawakal-green to-tawakal-blue shadow-md'
      : 'w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white/70 backdrop-blur-sm border border-white/50';
  }
}
