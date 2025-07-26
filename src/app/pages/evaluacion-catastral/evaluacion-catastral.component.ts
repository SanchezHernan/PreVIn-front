import { Component } from '@angular/core';
import { MatCard, MatCardTitle } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { CircIconComponent } from '../../shared/circ-icon/circ-icon.component';
import { PanelInfoComponent } from '../../shared/panel-info/panel-info.component';
import { BotonesFlotantesComponent } from '../../shared/botones-flotantes/botones-flotantes.component';
import { PeriodicElement } from '../../interfaces/periodic-element';


const ELEMENT_DATA: PeriodicElement[] = [
  {tipoConstruccion: 'Vivienda', cantidad: 6},
  {tipoConstruccion: 'Local Comercial', cantidad: 6},
];

@Component({
  selector: 'app-evaluacion-catastral',
  standalone: true,
  imports: [
    MatCard, CircIconComponent, 
    MatCardTitle, MatTableModule, PanelInfoComponent,
    CommonModule, BotonesFlotantesComponent
  ],
  templateUrl: './evaluacion-catastral.component.html',
  styleUrl: './evaluacion-catastral.component.scss'
})
export class EvaluacionCatastralComponent {

  professional = 'Rodriguez Peña, Luciano Raúl (ARQUITECTO)';

  displayedColumns: string[] = ['tipoConstruccion', 'cantidad'];
  dataSource = ELEMENT_DATA;

  info = {
    "partida": 148253,
    "tipoPosesion": "PROPIETARIO",
    "dni": "43.567.789",
    "titular": {
      "apellidos": "Ramirez",
      "nombres": "Juan Ángel"
    },
    "ubicacion": {
      "cuartel": 3,
      "distrito": 2,
      "seccion": 1,
      "manzana": 366,
      "lote_parcela": 1
    },
    "cuentas": {
      "osm": 2321,
      "tgi": 2344
    },
    "antecedente": "1113452",
    "domicilio": {
      "calle": "Suipacha",
      "numero": 564
    },
    "matricula": {
      "numero": 23123,
      "anio": 2023
    },
    "planoMensura": 5673
  }

  restricciones: any[] = [
    {
      'descripcion': 'RESTRICCIONES de GAS NEA',
      'archivo': 'Res_134232_NEA.pdf'
    },
    {
      'descripcion': 'RESTRICCIONES de ENERSA',
      'archivo': 'Res_134232_ENERSA.pdf'
    },
  ]

  abrirCorrecciones(): void {
    console.log('abrir correciones');
  }

  abrirCorreccionCampo(r: any): void {
    console.log('abrir correcion campo', r);
  }

  aprobar() {
    console.log('aprobar');
  }

  modalAbierto = false;

  registrarCorreccion(motivo: string) {
    console.log('Corrección enviada:', motivo);
    this.modalAbierto = false;
  }

}
