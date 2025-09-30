import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // 👈 Esto habilita <model-viewer>
})
export class ProductDetailsComponent {
  producto: any;

  productos = [
    {
      id: 1,
      nombre: 'Pulsera de plata',
      precio: 150,
      descripcion: 'Hermosa pulsera hecha en plata 925',
      model: 'assets/models/collar.glb',
      poster: 'assets/images/poster.webp',
      sku: 'PULS-001'
    },
    {
      id: 2,
      nombre: 'Collar de oro con inicial J',
      precio: 450,
      descripcion: 'Collar de oro de 18k con inicial personalizada',
      model: 'assets/models/collardeoro.glb',
      poster: 'assets/images/postercollar2.webp',
      sku: 'COLL-002'
    }
  ];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = this.productos.find(p => p.id === id);
  }
}