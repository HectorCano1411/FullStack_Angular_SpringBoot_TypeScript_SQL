import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LoggerService } from './logger.service';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { ClientesService } from './clientes/service/clientes.service';
import { AppRoutingModule } from './app.routes'
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { FakerApiService } from './person/fakerApi.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export const appConfig: ApplicationConfig = {
  providers:[ provideRouter(routes),
    provideHttpClient(withFetch()),
    FakerApiService,
    HttpClient,
    AppRoutingModule,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(),
    LoggerService,
    ClientesService, provideAnimationsAsync()
]
};
