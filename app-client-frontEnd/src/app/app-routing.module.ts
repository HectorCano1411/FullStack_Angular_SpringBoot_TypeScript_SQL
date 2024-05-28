// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './person/person-list/person-list.component';

const routes: Routes = [
  { path: 'persons', component: PersonListComponent },
  { path: '', redirectTo: '/persons', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
