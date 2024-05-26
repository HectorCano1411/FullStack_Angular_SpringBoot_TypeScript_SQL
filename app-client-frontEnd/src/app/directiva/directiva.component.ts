import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-directiva',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './directiva.component.html',
  styleUrl: './directiva.component.css'
})
export class DirectivaComponent {
  listarCurso: string[] = ['Java', 'Spring', 'JavaScript', 'C#', 'PHP'];
  habilitar: boolean = true;
  constructor() {}

  setHabilitar(): void {
    this.habilitar = (this.habilitar==true)? false: true;
  }
}
