import { Component, Input } from '@angular/core';
import { CommonModule }     from '@angular/common';       // pipes date, etc.
import { MatButtonModule }  from '@angular/material/button';

@Component({
  selector: 'app-visado-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './visado-card.component.html',
  styleUrls: ['./visado-card.component.scss']
})
export class VisadoCardComponent {
  /** Objeto visado (cualquier shape por ahora). */
  @Input() visado!: any;
}
