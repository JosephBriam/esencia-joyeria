import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule], // 👈 agrega RouterModule aquí
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {}