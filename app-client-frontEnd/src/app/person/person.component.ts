import { Component, OnInit } from '@angular/core';
import { FakerApiService } from './fakerApi.service';
import { Person } from './person.model';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css',
})
export class PersonComponent implements OnInit {
  persons: Person[] = [];
  modalOpen: boolean = false;
  loading: boolean = false; // Variable para controlar la carga de datos
  error: string | null = null; // Variable para almacenar mensajes de error

  constructor(private fakerApiService: FakerApiService) { }

  ngOnInit(): void {
    this.loading = true; // Inicia la carga de datos
    this.fakerApiService.getPersons(20, 'male', '2005-01-01').pipe(
      catchError(error => {
        this.loading = false; // Finaliza la carga de datos con error
        this.error = 'Error al obtener los datos'; // Almacena el mensaje de error
        return throwError(error); // Propaga el error
      })
    ).subscribe(
      response => {
        this.loading = false; // Finaliza la carga de datos con éxito
        this.persons = response.data.map((data: any) => new Person(data));
      }
    );
  }
}
