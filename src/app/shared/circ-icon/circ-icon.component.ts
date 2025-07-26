import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-circ-icon',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './circ-icon.component.html',
  styleUrl: './circ-icon.component.scss'
})
export class CircIconComponent {

  @Input() icon: string = 'info';
  @Input() color: string = '#fff';
  @Input() borderColor: string = '#000';
  @Input() size: string = '45px';

  get customStyles() {
    return {
      'background-color': this.color,
      'border': `3px solid ${this.borderColor}`,
      'font-size': '2.5rem',
      'height': this.size,
      'width': this.size,
      'border-radius': '50%',
      'padding': '10px',
      'display': 'inline-flex',
      'justify-content': 'center',
      'align-items': 'center',
    };
  }
}
