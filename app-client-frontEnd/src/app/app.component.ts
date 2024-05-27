import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { DirectivaComponent } from './directiva/directiva.component'
import { ClientesComponent } from './clientes/clientes.component'
import { slideInAnimation } from './animations';
import { ChildrenOutletContexts } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormComponent } from './clientes/form.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, FooterComponent, DirectivaComponent,
           ClientesComponent,FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [ slideInAnimation ]

  
})
export class AppComponent {
   title = 'Bienvenido a Angular ';
  
  constructor( private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('app-root')?.route?.snapshot?.data?.['animation'];
  }

}
