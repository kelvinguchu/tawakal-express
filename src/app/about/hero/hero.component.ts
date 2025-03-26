import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeIconsModule } from '../../shared/font-awesome.module';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { CompanyValuesService } from './hero.data';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CompanyValue } from './hero.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FontAwesomeIconsModule,
    HttpClientModule,
  ],
  providers: [CompanyValuesService],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
  // Icon sizes
  smallIconSize: SizeProp = 'sm';
  mediumIconSize: SizeProp = 'lg';
  valueIconSize: SizeProp = '1x';

  // Years of experience
  yearsOfExperience = 40;

  // Company values loaded from JSON
  companyValues: CompanyValue[] = [];
  loading = true;
  error = false;

  constructor(
    private readonly http: HttpClient,
    private readonly valuesService: CompanyValuesService
  ) {}

  ngOnInit(): void {
    this.loadCompanyValues();
  }

  /**
   * Loads company values from the JSON file
   */
  loadCompanyValues(): void {
    this.valuesService.getCompanyValues().subscribe({
      next: (values) => {
        this.companyValues = values;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      },
    });
  }

  getIconName(iconName: string): string {
    const nameWithoutPrefix = iconName.substring(2);
    return nameWithoutPrefix
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase();
  }
}
