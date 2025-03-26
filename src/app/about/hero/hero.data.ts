import { CompanyValue } from './hero.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

/**
 * Service to load company values data
 */
@Injectable({
  providedIn: 'root',
})
export class CompanyValuesService {
  private readonly dataUrl = '/data/company-values.json';

  constructor(private http: HttpClient) {}

  /**
   * Fetches company values from JSON file
   */
  getCompanyValues(): Observable<CompanyValue[]> {
    return this.http.get<CompanyValue[]>(this.dataUrl).pipe(
      catchError((error) => {
        console.error('Error loading company values:', error);
        return of([]);
      })
    );
  }
}
