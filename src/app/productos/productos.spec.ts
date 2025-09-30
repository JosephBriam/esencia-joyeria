import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.html',
  styleUrls: ['./productos.css']
})
export class ProductosComponent {
  productos = [
    {
      id: 1,
      nombre: 'Pulsera de plata',
      precio: 150,
      poster: 'posterpulsera.webp'
    },
    {
      id: 2,
      nombre: 'Collar de oro con inicial J',
      precio: 450,
      poster: 'postercollar2.webp'
    }
  ];
}