import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AgentsComponent } from './pages/agents/agents.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactPageComponent } from './pages/contactpage/contactpage.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'agents',
    component: AgentsComponent,
  },
  {
    path: 'careers',
    component: CareersComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  { path: '**', redirectTo: '' },
];
