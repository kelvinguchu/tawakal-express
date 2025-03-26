import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeIconsModule } from '../../shared/font-awesome.module';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { BRANCH_COUNTRIES, CORE_VALUES, PARTNER_COUNTRIES } from './about.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, FontAwesomeIconsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  // Icon sizes
  smallIconSize: SizeProp = 'sm';
  mediumIconSize: SizeProp = 'lg';
  valueIconSize: SizeProp = '1x';

  // Helper method to convert icon names from the format 'faIconName' to 'icon-name'
  getIconName(iconName: string): string {
    // Remove the 'fa' prefix
    const nameWithoutPrefix = iconName.substring(2);

    // Convert camelCase to kebab-case
    return nameWithoutPrefix
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase();
  }

  // Data from external files
  branchCountries = BRANCH_COUNTRIES;
  partnerCountries = PARTNER_COUNTRIES;
  coreValues = CORE_VALUES;
}
