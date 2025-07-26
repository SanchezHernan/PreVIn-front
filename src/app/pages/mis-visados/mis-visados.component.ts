import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { VisadoCardComponent } from '../../shared/visado-card/visado-card.component';

@Component({
  selector: 'app-misvisados',
  standalone: true,
  imports: [VisadoCardComponent, MatDividerModule, CommonModule],
  templateUrl: './mis-visados.component.html',
  styleUrls: ['./mis-visados.component.scss']
})
export class MisVisadosComponent {

  title = 'Mis Visados';
  
  // Arrays de objetos literales (sin modelo)
  visadosPendientes = [
    {
      numero: 4197,
      partida: 137412,
      inicio: new Date('2025-03-12'),
      descripcion: 'Hasta 3 Pisos – Obra Nueva',
      fase: 'FASE 1 - D. Iniciales',
      color: '#f8c498',
      accion: 'CONTINUAR'
    },
    {
      numero: 3156,
      partida: 123584,
      inicio: new Date('2024-11-22'),
      descripcion: 'Más de 3 Pisos – Ampliación/Refacción',
      fase: 'FASE 2 - Docs y Planos',
      color: '#92ccdd',
      accion: 'CONTINUAR'
    },
    {
      numero: 2341,
      partida: 124931,
      inicio: new Date('2024-01-08'),
      descripcion: 'Hasta 3 Pisos – Relevamiento',
      fase: 'FASE 2 - Docs y Planos',
      color: '#92ccdd',
      accion: 'CONTINUAR'
    },
    // …
  ];

  visadosPresentados = [
    {
      numero: 2127,
      partida: 116432,
      inicio: new Date('2024-01-08'),
      descripcion: 'Hasta 3 Pisos – Conforme a Obra',
      fase: 'APROBADO',
      color: '#00b050',
      accion: 'EXP. 1116742'
    },
    {
      numero: 2841,
      partida: 129853,
      inicio: new Date('2024-01-08'),
      descripcion: 'Más de 3 Pisos – Ampliación/Regacción',
      fase: 'PRESENTADO - FASE 1',
      color: '#ffe598',
      accion: 'EN EVALUACIÓN'
    },
    {
      numero: 3811,
      partida: 148391,
      inicio: new Date('2024-01-08'),
      descripcion: 'Hasta 3 Pisos – Relevamiento',
      fase: 'CORRECCIÓN',
      color: '#e4b9b4',
      accion: 'RESOLVER'
    },
    // …
  ];
}
