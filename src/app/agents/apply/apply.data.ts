import { AgentBenefit, AgentPhase } from './apply.model';
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
  private readonly phasesUrl = '/data/agent-phases.json';

  constructor(private http: HttpClient) {}

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

  /**
   * Fetches agent application phases from JSON file
   */
  getAgentPhases(): Observable<AgentPhase[]> {
    return this.http.get<AgentPhase[]>(this.phasesUrl).pipe(
      catchError((error) => {
        console.error('Error loading agent phases:', error);
        return of([]);
      })
    );
  }
}
