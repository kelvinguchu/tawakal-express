import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faSearch,
  faLocationDot,
  faPhone,
  faBuilding,
  faSortAlphaDown,
  faSortAlphaUp,
  faFilter,
  faInfoCircle,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';

// Define the Agent interface to match the JSON structure
interface Agent {
  locationName: string;
  phone: string;
  city: string;
  note: string;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    RippleModule,
    TooltipModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  // Font Awesome icons
  faSearch = faSearch;
  faLocationDot = faLocationDot;
  faPhone = faPhone;
  faBuilding = faBuilding;
  faSortAlphaDown = faSortAlphaDown;
  faSortAlphaUp = faSortAlphaUp;
  faFilter = faFilter;
  faInfoCircle = faInfoCircle;
  faMapMarkerAlt = faMapMarkerAlt;

  // Agents data
  agents = signal<Agent[]>([]);
  filteredAgents = signal<Agent[]>([]);

  // Search and filter state
  searchTerm = '';
  selectedCity = '';

  // Sort state
  sortField: 'locationName' | 'city' = 'city';
  sortDirection: 'asc' | 'desc' = 'asc';

  // Unique cities for filter dropdown
  cities: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAgents();
  }

  loadAgents(): void {
    this.http.get<Agent[]>('/data/agents-location.json').subscribe({
      next: (data) => {
        this.agents.set(data);
        this.filteredAgents.set(data);
        this.extractCities();
        this.sortAgents();
      },
      error: (error) => {
        console.error('Error loading agents data:', error);
      },
    });
  }

  extractCities(): void {
    // Extract unique cities and sort them alphabetically
    const uniqueCities = [...new Set(this.agents().map((agent) => agent.city))];
    this.cities = uniqueCities.sort();
  }

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

  toggleSort(field: 'locationName' | 'city'): void {
    if (this.sortField === field) {
      // Toggle direction if same field
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // Set new field and default to ascending
      this.sortField = field;
      this.sortDirection = 'asc';
    }

    this.sortAgents();
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedCity = '';
    this.filteredAgents.set(this.agents());
    this.sortAgents();
  }

  // Helper method to format phone numbers for display
  formatPhone(phone: string): string {
    // Simple formatting to add spaces for readability
    return phone.replace(/(\+\d{3})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');
  }
}
