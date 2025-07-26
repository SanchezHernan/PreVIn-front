import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-panel-info',
  imports: [CommonModule, MatCardModule],
  templateUrl: './panel-info.component.html',
  styleUrls: ['./panel-info.component.scss'],
})
export class PanelInfoComponent {
  @Input() numero!: string;
  @Input() estado!: string;
  @Input() partida!: string;
  @Input() descripcion!: string;
  @Input() fechaInicio!: string;
}
