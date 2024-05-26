import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private urlEndpoint: string = 'http://localhost:8080/api/clientes'
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
      // return of(CLIENTES)
      return this.http.get<Cliente[]>(this.urlEndpoint)
      // .pipe(map(response => response as Cliente[] ));
      
    }
}
