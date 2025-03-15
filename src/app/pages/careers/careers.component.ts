import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentOpportunitiesComponent } from '../../careers/current-opportunities/current-opportunities.component';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, CurrentOpportunitiesComponent],
  template: ` <app-current-opportunities></app-current-opportunities> `,
})
export class CareersComponent {}
