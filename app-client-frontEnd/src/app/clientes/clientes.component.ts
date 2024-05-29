import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClientesService } from './service/clientes.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import swal from 'sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  loading: boolean = false; // Variable para controlar la carga de datos
  error: string | null = null; // Variable para almacenar mensajes de error

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.loading = true; // Inicia la carga de datos
    this.clientesService.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
        this.loading = false; // Finaliza la carga de datos con éxito
      },
      error => {
        this.loading = false; // Finaliza la carga de datos con error
        this.error = 'Error al cargar clientes'; // Almacena el mensaje de error
      }
    );
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
        }, error => {
          // Manejo de errores al eliminar cliente
          swalWithBootstrapButtons.fire(
            'Error',
            'Error al eliminar cliente',
            'error'
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
