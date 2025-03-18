import {
  Component,
  OnInit,
  signal,
  AfterViewInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeIconsModule } from '../../shared/font-awesome.module';
import { Ripple } from 'primeng/ripple';
import { Tooltip } from 'primeng/tooltip';
import * as L from 'leaflet';
import { LeafletModule } from '@bluehalo/ngx-leaflet';

// UK Agent data structure
interface UKAgent {
  LocationCode: string;
  ExtLocationCode: string;
  OrgNumber: string;
  LocationName: string;
  'Apt,Unit': string;
  Street: string;
  City: string;
  PostalCode: string;
  PhoneNumber: string;
  Email: string;
  Latitude: number;
  Longitude: number;
}

@Component({
  selector: 'app-ukagents',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    FontAwesomeIconsModule,
    Ripple,
    Tooltip,
    LeafletModule,
  ],
  templateUrl: './ukagents.component.html',
  styleUrl: './ukagents.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class UkagentsComponent implements OnInit, AfterViewInit {
  // Component state
  agents = signal<UKAgent[]>([]);
  filteredAgents = signal<UKAgent[]>([]);
  searchTerm = '';
  selectedCity = '';
  sortField: 'LocationName' | 'City' = 'City';
  sortDirection: 'asc' | 'desc' = 'asc';
  cities: string[] = [];
  showMap = false;
  selectedAgent: UKAgent | null = null;

  // Leaflet map properties
  private map: L.Map | null = null;
  private markers: L.LayerGroup = L.layerGroup();
  options = {
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 2,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }),
    ],
    zoom: 5,
    center: L.latLng(52.5, -1.9),
    preferCanvas: true,
    worldCopyJump: true,
    fadeAnimation: true,
    zoomAnimation: true,
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAgents();
  }

  ngAfterViewInit(): void {}

  // Load agents from JSON file
  loadAgents(): void {
    this.http.get<UKAgent[]>('/data/uk-agents-location.json').subscribe({
      next: (data) => {
        const validAgents = data.filter(
          (agent) => agent && agent.LocationName && agent.LocationCode
        );

        this.agents.set(validAgents);
        this.filteredAgents.set(validAgents);

        this.extractCities();
        this.sortAgents();
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.agents.set([]);
          this.filteredAgents.set([]);
          console.error(
            'UK agents data file not found. Please check if the file exists at the specified path.'
          );
        } else if (error.status === 0) {
          console.error(
            'Network error occurred while loading UK agents. Please check your connection.'
          );
        } else {
          console.error(
            `Error ${error.status} loading UK agents: ${error.message}`
          );
        }
      },
    });
  }

  // Initialize map when Leaflet is ready
  onMapReady(map: L.Map): void {
    this.map = map;

    setTimeout(() => {
      const leafletMap = this.map;
      if (!leafletMap) return;

      leafletMap.invalidateSize(true);

      leafletMap.eachLayer((layer) => {
        leafletMap.removeLayer(layer);
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(leafletMap);

      this.addAgentMarkers();
    }, 500);
  }

  // Add agent markers to the map
  addAgentMarkers(): void {
    if (!this.map) return;

    this.markers.clearLayers();

    this.filteredAgents().forEach((agent) => {
      if (!agent.Latitude || !agent.Longitude) return;

      const marker = L.marker([agent.Latitude, agent.Longitude], {
        title: agent.LocationName,
        riseOnHover: true,
      }).bindPopup(this.createPopupContent(agent));

      marker.on('click', () => {
        this.viewAgentDetails(agent);
      });

      this.markers.addLayer(marker);
    });

    this.markers.addTo(this.map);

    if (this.filteredAgents().length > 0) {
      try {
        const points = this.filteredAgents()
          .filter((agent) => agent.Latitude && agent.Longitude)
          .map(
            (agent) => [agent.Latitude, agent.Longitude] as L.LatLngExpression
          );

        if (points.length > 0) {
          const bounds = L.latLngBounds(points);
          this.map.fitBounds(bounds, { padding: [50, 50] });
        }
      } catch (error) {
        this.map.setView([52.5, -1.9], 6);
        console.error('Error fitting map bounds:', error);
      }
    }
  }

  // Create HTML for marker popups
  createPopupContent(agent: UKAgent): string {
    return `
      <div class="popup-content">
        <h3 class="font-bold">${agent.LocationName}</h3>
        <p>${this.formatAddress(agent)}</p>
        <p><strong>Phone:</strong> ${agent.PhoneNumber}</p>
        ${agent.Email ? `<p><strong>Email:</strong> ${agent.Email}</p>` : ''}
      </div>
    `;
  }

  // Extract unique cities for filter dropdown
  extractCities(): void {
    const uniqueCities = [...new Set(this.agents().map((agent) => agent.City))];
    this.cities = uniqueCities.sort();
  }

  // Filter agents by search term and city
  searchAgents(): void {
    const term = this.searchTerm.toLowerCase();
    const city = this.selectedCity;

    const filtered = this.agents().filter((agent) => {
      const matchesTerm =
        !term ||
        agent.LocationName.toLowerCase().includes(term) ||
        agent.City.toLowerCase().includes(term) ||
        agent.Street.toLowerCase().includes(term) ||
        agent.PostalCode.toLowerCase().includes(term);

      const matchesCity = !city || agent.City === city;

      return matchesTerm && matchesCity;
    });

    this.filteredAgents.set(filtered);
    this.sortAgents();

    if (this.showMap && this.map) {
      this.addAgentMarkers();
    }
  }

  // Sort agents by field and direction
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
  toggleSort(field: 'LocationName' | 'City'): void {
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
    this.filteredAgents.set(this.agents());
    this.sortAgents();

    if (this.showMap && this.map) {
      this.addAgentMarkers();
    }
  }

  // Toggle between list and map views
  toggleMapView(): void {
    this.showMap = !this.showMap;
    this.selectedAgent = null;

    if (this.showMap) {
      setTimeout(() => {
        if (!this.map) return;

        const leafletMap = this.map;
        leafletMap.invalidateSize(true);

        leafletMap.eachLayer((layer) => {
          if (!(layer instanceof L.TileLayer)) {
            leafletMap.removeLayer(layer);
          }
        });

        this.addAgentMarkers();
      }, 800);
    }
  }

  // Format address for display
  formatAddress(agent: UKAgent): string {
    const parts = [
      agent['Apt,Unit'],
      agent.Street,
      agent.City,
      agent.PostalCode,
    ].filter(Boolean);

    return parts.join(', ');
  }

  // Handle agent selection and map centering
  viewAgentDetails(agent: UKAgent): void {
    this.selectedAgent = agent;

    if (this.showMap && this.map) {
      this.map.setView([agent.Latitude, agent.Longitude], 16);

      this.markers.eachLayer((layer: L.Layer) => {
        const marker = layer as L.Marker;
        const latLng = marker.getLatLng();

        if (latLng.lat === agent.Latitude && latLng.lng === agent.Longitude) {
          marker.openPopup();
        }
      });
    }
  }

  // Get URL for directions
  getGoogleMapsUrl(agent: UKAgent): string {
    return `https://www.google.com/maps/search/?api=1&query=${agent.Latitude},${agent.Longitude}`;
  }

  // Track by function for ngFor optimization
  trackByFn(index: number, agent: UKAgent): string {
    return agent.LocationCode;
  }
}
