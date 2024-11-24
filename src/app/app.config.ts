import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import {ApiModule, Configuration, ConfigurationParameters} from '../generated';
import { routes } from './app.routes';

const apiConfParams : ConfigurationParameters = {
  basePath: 'http://localhost:4200/' 
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    provideHttpClient(),
    importProvidersFrom(
      ApiModule.forRoot(() => new Configuration(apiConfParams))
    )]
};
