import {
  ApplicationConfig,
  provideZoneChangeDetection,
  APP_INITIALIZER,
} from '@angular/core';
import {
  provideRouter,
  withInMemoryScrolling,
  withHashLocation,
} from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

// Function to mock window object during SSR
export function mockWindowProvider() {
  return () => {
    if (typeof window === 'undefined') {
      // Use any type assertion to avoid TypeScript errors with minimal mock objects
      (global as any).window = {
        navigator: { userAgent: 'SSR' },
        location: { href: '/' },
        // necessary window properties
        setTimeout: () => 0,
        clearTimeout: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
      };

      // minimal document mock with any typing
      (global as any).document = {
        documentElement: { style: {} },
        createElement: () => ({ style: {} }),
        getElementsByTagName: () => [],
        createElementNS: () => ({ style: {} }),
        querySelector: () => null,
        querySelectorAll: () => [],
      };

      (global as any).navigator = { userAgent: 'SSR' };
    }
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      })
    ),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
    {
      provide: APP_INITIALIZER,
      useFactory: mockWindowProvider,
      multi: true,
    },
  ],
};
