import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  private bookService = inject(BookService);

  nombreUsuario: string = 'Estudiante';
imagenUrl: string = 'https://angular.io/assets/images/logos/angular/angular.svg';
  estaLogueado: boolean = false;
  listaLibros: string[] = ['Clean Code', 'Arquitectura Limpia', 'Refactoring'];

  ngOnInit() {
    this.bookService.getBooks().subscribe({
      next: (data) => {
        console.log('Libros cargados desde el backend:', data);
      },
      error: (err) => {
        console.error('Error al conectar con la API:', err);
      }
    });
  }

  saludar() {
    alert("Hola, el evento funciona correctamente");
  }

  cambiarEstado() {
    this.estaLogueado = !this.estaLogueado;
  }
}