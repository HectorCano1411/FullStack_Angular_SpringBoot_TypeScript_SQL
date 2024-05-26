import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LoggerService } from './logger.service';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { ClientesService } from './clientes/./clientes.service';
import { AppRoutingModule } from './app.routes'
import { provideHttpClient, withFetch } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers:[ provideRouter(routes),
    provideHttpClient(withFetch()),
    AppRoutingModule,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(),
    LoggerService,
    ClientesService
]
};
