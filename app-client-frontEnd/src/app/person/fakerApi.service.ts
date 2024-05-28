import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person.model'; // Asegúrate de tener importada la interfaz Person

@Injectable({
  providedIn: 'root'
})
export class FakerApiService {

  private apiUrl = 'https://fakerapi.it/api/v1/persons';

  constructor(private http: HttpClient) { }

  getPersons(quantity: number, gender: string, birthday: string): Observable<any> {
    const url = `${this.apiUrl}?_quantity=${quantity}&_gender=${gender}&_birthday_start=${birthday}`;
    return this.http.get<any>(url);
  }
}
