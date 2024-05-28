  import { Component } from '@angular/core';
  import { PersonService } from '../person.service';
  import { Person } from '../person.model';
  import { CommonModule } from '@angular/common';

  @Component({
    selector: 'app-person-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './person-list.component.html',
    styleUrl: './person-list.component.css'
  })
  export class PersonListComponent {

    persons: Person[] = [];

    constructor(private personService: PersonService) { }

    ngOnInit(): void {
      this.loadPersons();
    }

    loadPersons(): void {
      // this.personService.getAllPersons().subscribe(
      //   persons => {
      //     this.persons = persons;
      //   },
      //   error => {
      //     console.error('Error fetching persons: ', error);
      //   }
      // );
    }

  }
