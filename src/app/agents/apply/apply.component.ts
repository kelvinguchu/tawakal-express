import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeIconsModule } from '../../shared/font-awesome.module';
import { Ripple } from 'primeng/ripple';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Country {
  name: string;
}

interface AgentBenefit {
  title: string;
  description: string;
  icon: IconProp;
  color: string;
}

interface AgentPhase {
  number: number;
  title: string;
  description: string;
  icon: IconProp;
}

@Component({
  selector: 'app-apply',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FontAwesomeIconsModule,
    Ripple,
  ],
  templateUrl: './apply.component.html',
})
export class ApplyComponent implements OnInit {
  applicationForm: FormGroup;
  countries: string[] = [];
  submitting = false;
  submitted = false;
  formErrors: string[] = [];

  // Benefits of becoming an agent
  agentBenefits: AgentBenefit[] = [
    {
      title: 'Additional Income',
      description:
        'Earn competitive commissions on every transaction you process, creating a reliable source of additional income for your business.',
      icon: ['fas', 'money-bill-wave'],
      color: 'text-tawakal-green',
    },
    {
      title: 'Increased Foot Traffic',
      description:
        'Attract new customers to your business who come for money transfer services and may purchase your other products or services.',
      icon: ['fas', 'users'],
      color: 'text-tawakal-blue',
    },
    {
      title: 'Simple Technology',
      description:
        'Access our user-friendly platform that requires minimal training and technical knowledge to operate efficiently.',
      icon: ['fas', 'mobile-screen'],
      color: 'text-[#9e5a63]',
    },
    {
      title: 'Dedicated Support',
      description:
        'Receive personalized support from our team, including marketing materials, technical assistance, and business guidance.',
      icon: ['fas', 'headset'],
      color: 'text-amber-500',
    },
    {
      title: 'Global Network',
      description:
        'Join our extensive international network, connecting you to customers and opportunities across the globe.',
      icon: ['fas', 'globe'],
      color: 'text-tawakal-blue',
    },
    {
      title: 'Community Service',
      description:
        'Provide an essential service that helps families stay connected financially across international borders.',
      icon: ['fas', 'hand-holding-heart'],
      color: 'text-tawakal-green',
    },
  ];

  // Phases of becoming an agent
  agentPhases: AgentPhase[] = [
    {
      number: 1,
      title: 'Application',
      description:
        'Complete and submit the application form with your business information.',
      icon: ['fas', 'paper-plane'],
    },
    {
      number: 2,
      title: 'Verification',
      description:
        'Our team will review your application and verify your business details.',
      icon: ['fas', 'check-circle'],
    },
    {
      number: 3,
      title: 'Training',
      description:
        'Receive comprehensive training on our systems and processes.',
      icon: ['fas', 'graduation-cap'],
    },
    {
      number: 4,
      title: 'Launch',
      description: 'Start offering Tawakal Express services to your customers.',
      icon: ['fas', 'rocket'],
    },
  ];

  constructor(
    private readonly fb: FormBuilder,
    private readonly http: HttpClient
  ) {
    this.applicationForm = this.fb.group({
      country: ['', Validators.required],
      hasBusinessLocation: ['', Validators.required],
      hasComputer: ['', Validators.required],
      personalInfo: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phone: [
          '',
          [Validators.required, Validators.pattern(/^[0-9+\s-]{10,15}$/)],
        ],
        email: ['', [Validators.required, Validators.email]],
      }),
      businessInfo: this.fb.group({
        companyName: [''],
        streetAddress: [''],
        zipCode: [''],
        city: [''],
        businessPhone: [''],
      }),
    });

    // Listen for changes to the hasBusinessLocation field
    this.applicationForm
      .get('hasBusinessLocation')
      ?.valueChanges.subscribe((value) => {
        this.updateBusinessInfoValidation(value);
      });
  }

  ngOnInit(): void {
    this.loadCountries();

    // Initialize business validation based on current hasBusinessLocation value
    const hasBusinessLocationValue = this.applicationForm.get(
      'hasBusinessLocation'
    )?.value;
    if (hasBusinessLocationValue) {
      this.updateBusinessInfoValidation(hasBusinessLocationValue);
    }
  }

  // Update business info validation based on hasBusinessLocation value
  updateBusinessInfoValidation(hasBusinessLocation: string): void {
    const businessInfoGroup = this.applicationForm.get(
      'businessInfo'
    ) as FormGroup;

    if (hasBusinessLocation === 'yes') {
      // Add required validators when user has a business location
      businessInfoGroup.get('companyName')?.setValidators(Validators.required);
      businessInfoGroup
        .get('streetAddress')
        ?.setValidators(Validators.required);
      businessInfoGroup.get('zipCode')?.setValidators(Validators.required);
      businessInfoGroup.get('city')?.setValidators(Validators.required);
      businessInfoGroup
        .get('businessPhone')
        ?.setValidators([
          Validators.required,
          Validators.pattern(/^[0-9+\s-]{10,15}$/),
        ]);
    } else {
      // Clear validators when user doesn't have a business location
      businessInfoGroup.get('companyName')?.clearValidators();
      businessInfoGroup.get('streetAddress')?.clearValidators();
      businessInfoGroup.get('zipCode')?.clearValidators();
      businessInfoGroup.get('city')?.clearValidators();
      businessInfoGroup.get('businessPhone')?.clearValidators();
    }

    // Update the form controls
    businessInfoGroup.get('companyName')?.updateValueAndValidity();
    businessInfoGroup.get('streetAddress')?.updateValueAndValidity();
    businessInfoGroup.get('zipCode')?.updateValueAndValidity();
    businessInfoGroup.get('city')?.updateValueAndValidity();
    businessInfoGroup.get('businessPhone')?.updateValueAndValidity();
  }

  loadCountries(): void {
    this.http.get<any>('/data/world-countries.json').subscribe({
      next: (data) => {
        // Extract country names from GeoJSON format
        if (data?.features) {
          this.countries = data.features
            .map((feature: any) => feature.properties.name)
            .sort();
        }
      },
      error: (error) => {
        console.error('Error loading countries:', error);
        this.formErrors.push(
          'Could not load countries. Please try again later.'
        );
      },
    });
  }

  onSubmit(): void {
    if (this.applicationForm.invalid) {
      // Mark all fields as touched to display validation errors
      this.markFormGroupTouched(this.applicationForm);
      return;
    }

    this.submitting = true;
    this.formErrors = [];

    // Simulate form submission
    setTimeout(() => {
      this.submitting = false;
      this.submitted = true;
      // to be done: send the form data to the server
      console.log('Form data:', this.applicationForm.value);
    }, 1500);
  }

  // Helper to mark all form controls as touched for validation display
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      // Recursively mark nested form groups as touched
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Reset the form to start over
  resetForm(): void {
    this.applicationForm.reset();
    this.submitted = false;
  }
}
