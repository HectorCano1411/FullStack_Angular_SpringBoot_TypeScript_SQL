import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClientesService } from './clientes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from './cliente';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  clienteForm = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    email: new FormControl('')
  });

  cliente: Cliente | undefined;
  id: number | undefined;

  constructor(
    private clienteService: ClientesService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarCliente();
  }

  cargarCliente(): void {
    this.activateRoute.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.clienteService.getCliente(this.id).subscribe(cliente => {
          this.cliente = cliente;
          this.clienteForm.patchValue({
            nombre: cliente.nombre,
            apellido: cliente.apellido,
            email: cliente.email
          });
        });
      }
    });
  }

  public create(): void {
    const cliente: Cliente = { ...this.clienteForm.value, id: this.id } as Cliente;
    if (this.id) {
      this.clienteService.update(cliente).subscribe(cliente => {
        this.router.navigate(['/clientes']);
        swal.fire('Cliente Actualizado', `Cliente ${cliente.nombre} actualizado con éxito`, 'success');
      });
    } else {
      this.clienteService.create(cliente).subscribe(cliente => {
        this.router.navigate(['/clientes']);
        swal.fire('Nuevo Cliente', `Cliente ${cliente.nombre} creado con éxito`, 'success');
      });
    }
  }
}
