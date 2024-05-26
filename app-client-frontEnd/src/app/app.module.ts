import  { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';




@NgModule({
    declarations: [
        
    ],
    imports: [
        ClientesComponent,
        DirectivaComponent,
        CommonModule,
        BrowserModule,
        AppComponent,
        HeaderComponent,
        FooterComponent,
    ],
    // prividers: [],
    bootstrap: []

})


export class AppModule {}