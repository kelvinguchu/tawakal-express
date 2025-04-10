import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeIconsModule } from '../../shared/font-awesome.module';
import { Ripple } from 'primeng/ripple';
import { Tooltip } from 'primeng/tooltip';

// Agent data structure
interface SomaliaAgent {
  locationName: string;
  phone: string;
  city: string;
  note: string;
}

@Component({
  selector: 'app-somaliaagents',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    FontAwesomeIconsModule,
    Ripple,
    Tooltip,
  ],
  templateUrl: './somaliaagents.component.html',
})
export class SomaliaagentsComponent implements OnInit {
  // Agent data state
  agents = signal<SomaliaAgent[]>([]);
  filteredAgents = signal<SomaliaAgent[]>([]);

  // Search and filter state
  searchTerm = '';
  selectedCity = '';

  // Sort state
  sortField = 'city' as const;
  sortDirection = 'asc' as 'asc' | 'desc';

  // Unique cities for filter dropdown
  cities: string[] = [];

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.loadAgents();
  }

  // Load agent data from JSON file
  loadAgents(): void {
    this.http
      .get<SomaliaAgent[]>('/data/somalia-agents-location.json')
      .subscribe({
        next: (data) => {
          this.agents.set(data);
          this.filteredAgents.set(data);
          this.extractCities();
          this.sortAgents();
        },
        error: (error) => {
          console.error('Error loading Somalia agents data:', error);
        },
      });
  }

  // Extract unique cities for the dropdown filter
  extractCities(): void {
    const uniqueCities = [...new Set(this.agents().map((agent) => agent.city))];
    // Sort the cities alphabetically
    this.cities = [...uniqueCities];
    this.cities.sort((a, b) => a.localeCompare(b));
  }

  // Filter agents based on search term and selected city
  searchAgents(): void {
    const term = this.searchTerm.toLowerCase();
    const city = this.selectedCity;

    const filtered = this.agents().filter((agent) => {
      const matchesTerm =
        !term ||
        agent.locationName.toLowerCase().includes(term) ||
        agent.city.toLowerCase().includes(term) ||
        agent.note.toLowerCase().includes(term);

      const matchesCity = !city || agent.city === city;

      return matchesTerm && matchesCity;
    });

    this.filteredAgents.set(filtered);
    this.sortAgents();
  }

  // Sort agents by the selected field and direction
  sortAgents(): void {
    const sorted = [...this.filteredAgents()].sort((a, b) => {
      const valueA = a[this.sortField].toLowerCase();
      const valueB = b[this.sortField].toLowerCase();

      if (this.sortDirection === 'asc') {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });

    this.filteredAgents.set(sorted);
  }

  // Toggle sort field and direction
  toggleSort(field: 'city'): void {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }

    this.sortAgents();
  }

  // Reset all filters and search
  clearFilters(): void {
    this.searchTerm = '';
    this.selectedCity = '';
    // Reset to original data, then sort
    this.filteredAgents.set([...this.agents()]);
    this.sortField = 'city';
    this.sortDirection = 'asc';
    this.sortAgents();
  }

  // Format phone numbers for display
  formatPhone(phone: string): string {
    return phone.replace(/(\+\d{3})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');
  }
}
