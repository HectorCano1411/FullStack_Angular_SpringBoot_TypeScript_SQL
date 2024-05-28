import { Component, OnInit } from '@angular/core';
import { FakerApiService } from './fakerApi.service';
import { Person } from './person.model'; // Asegúrate de tener importada la interfaz Person
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.component.html',
})
export class PersonComponent implements OnInit {

  persons: any;

  constructor(private fakerApiService: FakerApiService) { }
  ngOnInit(): void {     this.fakerApiService.getPersons(10, 'male', '2005-01-01').subscribe(
           reponse => {this.persons = reponse.data;         
            console.log(this.persons);},
            error => {console.error('Error al obtener los datos', error);});}

  // ngOnInit(): void {
  //   this.getPersons();
  //   console.log('personas,', this.persons)
  // }

  // getPersons(): void {
  //   this.fakerApiService.getPersons(10, 'male', '2005-01-01')
  //     .subscribe(personsResponse => this.persons = personsResponse.data);
  // }
}
