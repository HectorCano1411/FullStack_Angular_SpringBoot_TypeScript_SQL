import  { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; 






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

    ],
    // prividers: [],
    bootstrap: []

})


export class AppModule {}