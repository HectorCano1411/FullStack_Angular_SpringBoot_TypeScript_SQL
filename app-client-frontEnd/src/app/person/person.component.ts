import { Component, OnInit } from '@angular/core';
import { FakerApiService } from './fakerApi.service';
import { Person } from './person.model'; // Asegúrate de tener importada la interfaz Person
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css',
})
export class PersonComponent implements OnInit {
  persons: Person[] = []; // Utiliza el modelo Person para tipar el array de personas
  modalOpen: boolean = false;

  constructor(private fakerApiService: FakerApiService) { }

  ngOnInit(): void {
    this.fakerApiService.getPersons(20, 'male', '2005-01-01').subscribe(
      response => {
        // Mapea los datos de la respuesta a objetos de tipo Person
        this.persons = response.data.map((data: any) => new Person(data));
        // console.log(this.persons);
      },
      error => {
        console.error('Error al obtener los datos', error);
      });
  }

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }
}
