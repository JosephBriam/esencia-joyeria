import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// 👇 importar esto
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideRouter(routes),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));

