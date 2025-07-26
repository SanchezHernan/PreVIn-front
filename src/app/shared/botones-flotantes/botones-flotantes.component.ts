import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-botones-flotantes',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './botones-flotantes.component.html',
  styleUrls: ['./botones-flotantes.component.scss']
})
export class BotonesFlotantesComponent {
  @Output() aprobar = new EventEmitter<void>();
  @Output() correcciones = new EventEmitter<void>();

  onAprobar() {
    this.aprobar.emit();
  }

  onCorrecciones() {
    this.correcciones.emit();
  }
}
