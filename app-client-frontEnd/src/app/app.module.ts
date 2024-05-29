import  { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './clientes/form/form.component';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; 
import { PersonListComponent } from './person/person-list/person-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginacionComponent } from './paginacion/paginacion.component';
import { ClienteDetalleComponent } from './clientes/cliente-detalle/cliente-detalle.component';







@NgModule({
    declarations: [
        
    ],
    imports: [
        AppComponent,
        ClientesComponent,
        DirectivaComponent,
        CommonModule,
        BrowserModule,
        HeaderComponent,
        FooterComponent,
        FormComponent,
        FormsModule,  
        ReactiveFormsModule,
        RouterModule.forRoot(routes), 
        PersonListComponent,
        MatPaginatorModule,
        PaginacionComponent,
        ClienteDetalleComponent,
        
    ],
    // prividers: [],
    bootstrap: [],
    
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
    

export class AppModule {}