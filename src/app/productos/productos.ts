import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 importa esto
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule], // 👈 agrega CommonModule aquí
  templateUrl: './productos.html',
  styleUrls: ['./productos.css']
})
export class ProductosComponent {
  productos = [
  {
    id: 1,
    nombre: 'Pulsera de oro con diamantes',
    precio: 250,
    descripcion: 'Pulsera de oro con diamantes incrustados',
    model: 'assets/models/collar.glb',   // 👈
    poster: 'assets/images/poster.webp', // 👈
    sku: 'PULSERA-001'
  },
  {
    id: 2,
    nombre: 'Collar de oro con la inicial J',
    precio: 450,
    descripcion: 'Collar de oro de 18k con inicial personalizada',
    model: 'assets/models/collardeoro.glb',
    poster: 'assets/images/postercollar2.webp',
    sku: 'COLLAR-002'
  }
];
}
