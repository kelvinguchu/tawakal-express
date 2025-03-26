import { CoreValue, Country } from './about.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

/**
 * Service to load about page data
 */
@Injectable({
  providedIn: 'root',
})
export class AboutDataService {
  private readonly coreValuesUrl = '/data/core-values.json';
  private readonly branchCountriesUrl = '/data/branch-countries.json';
  private readonly partnerCountriesUrl = '/data/partner-countries.json';

  constructor(private readonly http: HttpClient) {}

  /**
   * Fetches company core values from JSON file
   */
  getCoreValues(): Observable<CoreValue[]> {
    return this.http.get<CoreValue[]>(this.coreValuesUrl).pipe(
      catchError((error) => {
        console.error('Error loading core values:', error);
        console.error('Core values URL:', this.coreValuesUrl);
        return of([]);
      })
    );
  }

  /**
   * Fetches branch countries from JSON file
   */
  getBranchCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.branchCountriesUrl).pipe(
      catchError((error) => {
        console.error('Error loading branch countries:', error);
        console.error('Branch countries URL:', this.branchCountriesUrl);
        return of([]);
      })
    );
  }

  /**
   * Fetches partner countries from JSON file
   */
  getPartnerCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.partnerCountriesUrl).pipe(
      catchError((error) => {
        console.error('Error loading partner countries:', error);
        console.error('Partner countries URL:', this.partnerCountriesUrl);
        return of([]);
      })
    );
  }
}
