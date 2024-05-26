import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from './cliente';
import { ClientesService } from './clientes.service';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent  implements OnInit{

   clientes: Cliente[] = [];
  
  constructor(private clientesService: ClientesService) {}

  ngOnInit(){
    this.clientesService.getClientes().subscribe(
      clientes => this.clientes = clientes);
    
  }
}
