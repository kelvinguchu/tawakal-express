import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeIconsModule } from '../../shared/font-awesome.module';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { AboutDataService } from './about.data';
import { CoreValue, Country } from './about.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    FontAwesomeIconsModule,
    HttpClientModule,
  ],
  providers: [AboutDataService],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  // Make Array available to the template
  protected readonly Array = Array;

  // Icon sizes
  smallIconSize: SizeProp = 'sm';
  mediumIconSize: SizeProp = 'lg';
  valueIconSize: SizeProp = '1x';

  // Data
  branchCountries: Country[] = [];
  partnerCountries: Country[] = [];
  coreValues: CoreValue[] = [];

  // Loading states
  loadingCoreValues = true;
  loadingBranchCountries = true;
  loadingPartnerCountries = true;

  // Error states
  coreValuesError = false;
  branchCountriesError = false;
  partnerCountriesError = false;

  constructor(private readonly aboutDataService: AboutDataService) {}

  ngOnInit(): void {
    this.loadCoreValues();
    this.loadBranchCountries();
    this.loadPartnerCountries();
  }

  /**
   * Load core values from the service
   */
  loadCoreValues(): void {
    this.aboutDataService.getCoreValues().subscribe({
      next: (values) => {
        this.coreValues = values;
        this.loadingCoreValues = false;
      },
      error: () => {
        this.coreValuesError = true;
        this.loadingCoreValues = false;
      },
    });
  }

  /**
   * Load branch countries from the service
   */
  loadBranchCountries(): void {
    this.aboutDataService.getBranchCountries().subscribe({
      next: (countries) => {
        this.branchCountries = countries;
        this.loadingBranchCountries = false;
      },
      error: () => {
        this.branchCountriesError = true;
        this.loadingBranchCountries = false;
      },
    });
  }

  /**
   * Load partner countries from the service
   */
  loadPartnerCountries(): void {
    this.aboutDataService.getPartnerCountries().subscribe({
      next: (countries) => {
        this.partnerCountries = countries;
        this.loadingPartnerCountries = false;
      },
      error: () => {
        this.partnerCountriesError = true;
        this.loadingPartnerCountries = false;
      },
    });
  }

  // Helper method to convert icon names from the format 'faIconName' to 'icon-name'
  // or handle the new array format ["fas", "icon-name"]
  getIconName(icon: string | string[]): string {
    if (Array.isArray(icon)) {
      // If icon is already in the array format, just return the second element
      return icon[1];
    }

    // Legacy format handling (for backwards compatibility)
    // Remove the 'fa' prefix
    const nameWithoutPrefix = icon.substring(2);

    // Convert camelCase to kebab-case
    return nameWithoutPrefix
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase();
  }

  // Helper method to get the icon as IconProp
  getIconProp(icon: string | string[]): IconProp {
    if (Array.isArray(icon)) {
      return icon as IconProp;
    }

    // For string format, convert to array format
    return ['fas', this.getIconName(icon)] as IconProp;
  }
}
