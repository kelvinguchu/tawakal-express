import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route - Home page
  { path: 'home', redirectTo: '', pathMatch: 'full' }, // Redirect /home to root
  // Add other routes here as needed
  { path: '**', redirectTo: '' }, // Wildcard route - redirect to home for any unknown routes
];
