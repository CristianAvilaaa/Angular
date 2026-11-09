import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  // Variable usada para la Interpolación y el Two-Way Binding
  nombreUsuario: string = 'Estudiante';

  // Variable usada para el Property Binding de la imagen
  imagenUrl: string = 'https://angular.io/assets/images/logos/angular/angular.svg';

  // Variable de control booleana para el Estado Lógico con @if
  estaLogueado: boolean = false;

  // Arreglo de datos para la Lista Iterada con la directiva @for
  listaLibros: string[] = ['Clean Code', 'Arquitectura Limpia', 'Refactoring'];

  // Método / Función ejecutada por el Event Binding del Botón
  saludar() {
    alert("Hola, el evento funciona correctamente");
  }

  // Método que cambia el estado lógico de la variable booleana
  cambiarEstado() {
    this.estaLogueado = !this.estaLogueado;
  }
}