import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ProductosComponent } from './productos/productos';
import { ProductDetailsComponent } from './product-details/product-details';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // 👈 ruta inicial
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:id', component: ProductDetailsComponent }
];