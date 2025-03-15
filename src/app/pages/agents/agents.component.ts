import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../../agents/list/list.component';

@Component({
    selector: 'app-agents',
    standalone: true,
    imports: [CommonModule, ListComponent],
    template: `
    <app-list></app-list>
    `
})
export class AgentsComponent { }

