import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'agents',
    loadComponent: () =>
      import('./pages/agents/agents.component').then((m) => m.AgentsComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./agents/list/list.component').then((m) => m.ListComponent),
      },
      {
        path: 'somalia',
        loadComponent: () =>
          import('./agents/somaliaagents/somaliaagents.component').then(
            (m) => m.SomaliaagentsComponent
          ),
      },
      {
        path: 'uk',
        loadComponent: () =>
          import('./agents/ukagents/ukagents.component').then(
            (m) => m.UkagentsComponent
          ),
      },
      {
        path: 'apply',
        loadComponent: () =>
          import('./agents/apply/apply.component').then((m) => m.ApplyComponent),
      },
    ],
  },
  {
    path: 'careers',
    loadComponent: () =>
      import('./pages/careers/careers.component').then(
        (m) => m.CareersComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contactpage/contactpage.component').then(
        (m) => m.ContactPageComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
