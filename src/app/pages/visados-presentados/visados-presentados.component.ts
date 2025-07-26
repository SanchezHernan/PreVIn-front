import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectComponent } from '../../shared/mat-select/mat-select.component';
import { VisadoCardComponent } from '../../shared/visado-card/visado-card.component';
import { Partida } from '../../interfaces/partida';

@Component({
  selector: 'app-visados-presentados',
  standalone: true,
  imports: [
    MatDividerModule, CommonModule, MatSelectComponent,
    MatSelectModule, MatIconModule, VisadoCardComponent,
    MatIcon, MatButtonModule, FormsModule,
    MatInputModule, MatFormFieldModule
  ],
  templateUrl: './visados-presentados.component.html',
  styleUrl: './visados-presentados.component.scss'
})
export class VisadosPresentadosComponent {

  title = 'Visados Presentados'
  value = 'Clear me';

  p1: Partida[] = [
    {id: 0, value: 'Profesional'},
    {id: 1, value: 'Cod. Visado'}
  ];

  p2: Partida[] = [
    {id: 2, value: 'Profesional'},
    {id: 3, value: 'Cod. Visado'},
    {id: 4, value: 'Expediente'}
  ];

  visadosEnEvaluacion = [
    {
      numero: 2127,
      partida: 116432,
      inicio: new Date('2024-01-08'),
      descripcion: 'Hasta 3 Pisos – Conforme Obra',
      fase: 'PRESENTADO',
      color: '#ffe598',
      accion: 'EVALUAR'
    },
    {
      numero: 2841,
      partida: 129853,
      inicio: new Date('2024-01-08'),
      descripcion: 'Más de 3 Pisos – Ampliación/Refacción',
      fase: 'RESPONDIDO',
      color: '#92ccdd',
      accion: 'ESPERANDO RESPUESTA'
    },
    {
      numero: 3811,
      partida: 148391,
      inicio: new Date('2024-01-08'),
      descripcion: 'Hasta 3 Pisos – Relevamiento',
      fase: 'CORRECCIÓN',
      color: '#e4b9b4',
      accion: 'EVALUAR'
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
      fase: 'APROBADO',
      color: '#00b050',
      accion: 'EXP. 1116823'
    },
    {
      numero: 3811,
      partida: 148391,
      inicio: new Date('2024-01-08'),
      descripcion: 'Hasta 3 Pisos – Relevamiento',
      fase: 'APROBADO',
      color: '#00b050',
      accion: 'EXP. 1117234'
    },
    // …
  ];
}
