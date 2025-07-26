import { Component, Input } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-mat-select',
  standalone: true,
  imports: [MatSelectModule],
  templateUrl: './mat-select.component.html',
  styleUrl: './mat-select.component.scss'
})
export class MatSelectComponent {
  @Input() placeholder!: string;
  @Input() elements!: any;
}
