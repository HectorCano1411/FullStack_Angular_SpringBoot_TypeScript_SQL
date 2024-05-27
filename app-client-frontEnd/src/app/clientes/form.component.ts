import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  clienteForm = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {}

  create() {
    console.log(this.clienteForm.value);
    // Aquí puedes manejar la lógica de creación del cliente
}
}