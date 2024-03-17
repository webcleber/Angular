import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { from } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()],
  
};
