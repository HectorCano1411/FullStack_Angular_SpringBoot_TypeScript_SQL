
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../cliente';
import { ClientesService } from '../service/clientes.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-cliente-detalle',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './cliente-detalle.component.html',
  styleUrl: './cliente-detalle.component.css'
})
export class ClienteDetalleComponent implements OnInit {
  cliente: Cliente | undefined;

  constructor(
    private route: ActivatedRoute,
    private clientesService: ClientesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.clientesService.getCliente(id).subscribe(cliente => {
          this.cliente = cliente;
        });
      }
    });
  }
}