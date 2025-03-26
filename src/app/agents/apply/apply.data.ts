import { AgentBenefit } from './apply.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

/**
 * Service to load agent application data
 */
@Injectable({
  providedIn: 'root',
})
export class AgentDataService {
  private readonly benefitsUrl = '/data/agent-benefits.json';

  constructor(private readonly http: HttpClient) {}

  /**
   * Fetches agent benefits from JSON file
   */
  getAgentBenefits(): Observable<AgentBenefit[]> {
    return this.http.get<AgentBenefit[]>(this.benefitsUrl).pipe(
      catchError((error) => {
        console.error('Error loading agent benefits:', error);
        return of([]);
      })
    );
  }
}
