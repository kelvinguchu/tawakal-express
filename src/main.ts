import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Patch the global context to prevent window is not defined errors in SSR
// This must be before any imports that might use window
const isBrowser = typeof window !== 'undefined';
if (!isBrowser) {
  // Create minimal window mock for server-side rendering
  (global as any).window = {
    navigator: {},
    document: {},
  };
}

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
