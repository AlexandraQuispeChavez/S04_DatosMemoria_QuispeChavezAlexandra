import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Banda {
  id: number;
  nombre: string;
  genero: string;
  pais: string;
}

@Component({
  selector: 'app-bandas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bandas.html',
  styleUrls: ['./bandas.css']
})
export class BandasComponent {

  bandas: Banda[] = [
    { id: 1, nombre: 'BTS', genero: 'K-pop', pais: 'Corea del Sur' },
    { id: 2, nombre: 'BLACKPINK', genero: 'K-pop', pais: 'Corea del Sur' },
    { id: 3, nombre: 'Stray Kids', genero: 'K-pop', pais: 'Corea del Sur' },
  ];

  nuevaBanda: Banda = { id: 0, nombre: '', genero: '', pais: '' };
  modoEdicion: boolean = false;
  mostrarFormulario: boolean = false;

  // ✅ Esto genera el número correlativo correcto
  getNextId(): number {
    if (this.bandas.length === 0) return 1;
    return Math.max(...this.bandas.map(b => b.id)) + 1;
  }

  agregar() {
    if (!this.nuevaBanda.nombre || !this.nuevaBanda.genero || !this.nuevaBanda.pais) {
      alert('⚠️ Completa todos los campos');
      return;
    }
    this.nuevaBanda.id = this.getNextId();
    this.bandas.push({ ...this.nuevaBanda });
    this.limpiar();
  }

  editar(banda: Banda) {
    this.nuevaBanda = { ...banda };
    this.modoEdicion = true;
    this.mostrarFormulario = true;
  }

  guardarEdicion() {
    const index = this.bandas.findIndex(b => b.id === this.nuevaBanda.id);
    if (index !== -1) {
      this.bandas[index] = { ...this.nuevaBanda };
    }
    this.limpiar();
  }

  eliminar(id: number) {
    if (confirm('¿Eliminar esta banda?')) {
      this.bandas = this.bandas.filter(b => b.id !== id);
    }
  }

  limpiar() {
    this.nuevaBanda = { id: 0, nombre: '', genero: '', pais: '' };
    this.modoEdicion = false;
    this.mostrarFormulario = false;
  }
}