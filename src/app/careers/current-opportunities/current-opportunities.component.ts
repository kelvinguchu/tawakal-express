import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeIconsModule } from '../../shared/font-awesome.module';
import { Ripple } from 'primeng/ripple';

// Job category data structure
interface JobCategory {
  name: string;
  icon: string;
  description: string;
  comingSoon: boolean;
}

@Component({
  selector: 'app-current-opportunities',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FontAwesomeIconsModule,
    Ripple,
  ],
  templateUrl: './current-opportunities.component.html',
  styleUrl: './current-opportunities.component.css',
})
export class CurrentOpportunitiesComponent {
  // Form state
  email: string = '';
  selectedCategories: string[] = [];
  isSubmitted: boolean = false;
  isError: boolean = false;

  // Job categories for future alerts
  jobCategories: JobCategory[] = [
    {
      name: 'Customer Service',
      icon: 'briefcase',
      description:
        'Support roles helping our customers with their money transfer needs',
      comingSoon: true,
    },
    {
      name: 'Technology',
      icon: 'briefcase',
      description:
        'Software development, IT infrastructure, and digital innovation',
      comingSoon: true,
    },
    {
      name: 'Operations',
      icon: 'briefcase',
      description:
        'Ensuring smooth day-to-day functioning of our transfer services',
      comingSoon: true,
    },
    {
      name: 'Finance',
      icon: 'briefcase',
      description: 'Accounting, financial analysis, and compliance roles',
      comingSoon: true,
    },
    {
      name: 'Marketing',
      icon: 'briefcase',
      description:
        'Promoting our services and building our brand in Somalia and beyond',
      comingSoon: true,
    },
  ];

  // Locations where we typically hire
  locations = [
    'Mogadishu',
    'Hargeisa',
    'Bosaso',
    'Kismayo',
    'Garowe',
    'Remote',
  ];

  // Toggle job category selection
  toggleCategory(category: string): void {
    const index = this.selectedCategories.indexOf(category);
    if (index === -1) {
      this.selectedCategories.push(category);
    } else {
      this.selectedCategories.splice(index, 1);
    }
  }

  // Submit job alert form
  submitJobAlert(): void {
    if (!this.email || this.selectedCategories.length === 0) {
      this.isError = true;
      return;
    }

    // In a real implementation, this would call an API to save the job alert
    console.log('Job alert submitted:', {
      email: this.email,
      categories: this.selectedCategories,
    });

    this.isSubmitted = true;
    this.isError = false;
    this.email = '';
    this.selectedCategories = [];

    // Reset the form after 5 seconds
    setTimeout(() => {
      this.isSubmitted = false;
    }, 5000);
  }
}
