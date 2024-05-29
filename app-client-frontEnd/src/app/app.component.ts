import { Component, ErrorHandler } from '@angular/core';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { DirectivaComponent } from './directiva/directiva.component'
import { ClientesComponent } from './clientes/clientes.component'
import { ChildrenOutletContexts } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormComponent } from './clientes/form/form.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonComponent } from './person/person.component';
import { ClienteDetalleComponent } from './clientes/cliente-detalle/cliente-detalle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, FooterComponent, DirectivaComponent,
           ClientesComponent,FormComponent,PersonListComponent,PersonComponent,ClienteDetalleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   title = 'Bienvenido a Angular ';
  
  constructor( private contexts: ChildrenOutletContexts, private errorHandler: ErrorHandler) {}

  getRouteAnimationData() {
    return this.contexts.getContext('app-root')?.route?.snapshot?.data?.['animation'];
  }
  
  // Manejo de errores
  handleError(error: any) {
    console.error('Ha ocurrido un error:', error);
    
  }
}
