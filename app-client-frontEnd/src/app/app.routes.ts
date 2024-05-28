import { Routes, RouterModule } from '@angular/router';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { FormComponent } from './clientes/form.component';


var console
export const routes: Routes = [
  { path: 'directiva', component: DirectivaComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/form', component: FormComponent },
  { path: 'clientes/form/:id', component: FormComponent },
  { path: '', redirectTo: '/clie', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// import {  Routes } from '@angular/router';
// import { DirectivaComponent } from './directiva/directiva.component';
// import { ClientesComponent } from './clientes/clientes.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
// import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

// export const routes: Routes = [
//   { path: 'app-clientes', component: ClientesComponent },
//   { path: 'app-directiva', component: DirectivaComponent },
  
//   { path: '',   redirectTo: '/cliente', pathMatch: 'full' },
//   { path: '**', component: PageNotFoundComponent }
//   ];

//   @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })
//   @NgModule({
//     imports: [
//       RouterModule.forRoot([
//         { path: 'app-clientes', component: ClientesComponent },
//         { path: 'app-directiva', component: DirectivaComponent },
//     ])
//     ],
//     exports: [
//       RouterModule
//     ]
//   })
//   export class AppRoutingModule { }
  