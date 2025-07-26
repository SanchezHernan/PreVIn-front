import { Component } from '@angular/core';
import { PanelInfoComponent } from '../../shared/panel-info/panel-info.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BotonesFlotantesComponent } from '../../shared/botones-flotantes/botones-flotantes.component';
import { ArchivoExpediente } from '../../interfaces/archivo-expediente';


@Component({
  selector: 'app-evaluacion-obras-privadas',
  imports: [
    CommonModule, PanelInfoComponent, MatCardModule,
    MatIconModule, MatFormFieldModule, MatInputModule,
    FormsModule, ReactiveFormsModule, BotonesFlotantesComponent
  ],
  templateUrl: './evaluacion-obras-privadas.component.html',
  styleUrl: './evaluacion-obras-privadas.component.scss'
})
export class EvaluacionObrasPrivadasComponent {
  title = 'Evaluación de Obras Privadas';

planos: ArchivoExpediente[] = [
    {
      descripcion: 'Plano de primer corte',
      nombreArchivo: 'Pla_134232_C1.pdf',
      estado: 'pendiente',
    },
    {
      descripcion: 'Plano de segundo corte',
      nombreArchivo: 'Pla_134232_C2.pdf',
      estado: 'aprobado',
    },
  ]

  planillas: ArchivoExpediente[] = [
    {
      descripcion: 'Primer Planilla de Cat de Vivienda',
      nombreArchivo: 'Pla_123214_PCV1.pdf',
      estado: 'rechazado',
      mensajeEstado: 'ESPERA DE RESPUESTA',
    },
  ];

  correccionDescripcion = '';


  abrirCorrecciones(): void {
    console.log('abrir correciones');
  }

  aprobar() {
    console.log('aprobar');
  }
}
