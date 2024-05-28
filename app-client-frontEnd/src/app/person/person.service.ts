// person.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  // private baseUrl = 'http://localhost:8080/api/persons';

  constructor(private http: HttpClient) { }

  getAllPersons(): any {
    // return this.http.get<Person[]>(this.baseUrl);
    return null
  }
}
