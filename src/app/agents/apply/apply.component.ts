import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeIconsModule } from '../../shared/font-awesome.module';
import { Ripple } from 'primeng/ripple';
import { AgentDataService } from './apply.data';
import { AgentBenefit, AgentPhase } from './apply.model';

@Component({
  selector: 'app-apply',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FontAwesomeIconsModule,
    HttpClientModule,
    Ripple,
  ],
  providers: [AgentDataService],
  templateUrl: './apply.component.html',
})
export class ApplyComponent implements OnInit {
  applicationForm: FormGroup;
  countries: string[] = [];
  submitting = false;
  submitted = false;
  formErrors: string[] = [];

  // Benefits and phases data
  agentBenefits: AgentBenefit[] = [];
  agentPhases: AgentPhase[] = [];
  loadingBenefits = true;
  loadingPhases = true;
  benefitsError = false;
  phasesError = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly http: HttpClient,
    private readonly agentDataService: AgentDataService
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
    this.loadAgentBenefits();
    this.loadAgentPhases();

    // Initialize business validation based on current hasBusinessLocation value
    const hasBusinessLocationValue = this.applicationForm.get(
      'hasBusinessLocation'
    )?.value;
    if (hasBusinessLocationValue) {
      this.updateBusinessInfoValidation(hasBusinessLocationValue);
    }
  }

  /**
   * Loads agent benefits from JSON file
   */
  loadAgentBenefits(): void {
    this.agentDataService.getAgentBenefits().subscribe({
      next: (benefits) => {
        this.agentBenefits = benefits;
        this.loadingBenefits = false;
      },
      error: () => {
        this.benefitsError = true;
        this.loadingBenefits = false;
        this.formErrors.push(
          'Could not load agent benefits. Please try again later.'
        );
      },
    });
  }

  /**
   * Loads agent phases from JSON file
   */
  loadAgentPhases(): void {
    this.agentDataService.getAgentPhases().subscribe({
      next: (phases) => {
        this.agentPhases = phases;
        this.loadingPhases = false;
      },
      error: () => {
        this.phasesError = true;
        this.loadingPhases = false;
        this.formErrors.push(
          'Could not load agent phases. Please try again later.'
        );
      },
    });
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
