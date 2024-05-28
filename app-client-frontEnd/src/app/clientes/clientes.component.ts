import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from './cliente';
import { ClientesService } from './clientes.service';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import swal from 'sweetalert2';
import Swal from 'sweetalert2';


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
  delete(cliente: Cliente): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro?',
      text: `¿Seguro que deseas eliminar al cliente ${cliente.nombre} ${cliente.apellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then(result => {
      if (result.isConfirmed) {
        this.clientesService.delete(cliente.id).subscribe(() => {
          this.clientes = this.clientes.filter(c => c !== cliente);
          swalWithBootstrapButtons.fire(
            'Cliente Eliminado!',
            `Cliente ${cliente.nombre} ${cliente.apellido} eliminado con éxito.`,
            'success'
          );
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'El cliente está seguro',
          'error'
        );
      }
    });
  }
}