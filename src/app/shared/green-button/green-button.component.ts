import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-green-button',
  standalone: true,
  imports: [MatButtonModule, RouterModule],
  templateUrl: './green-button.component.html',
  styleUrls: ['./green-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GreenButtonComponent {
  /** Igual que en un button normal */
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;
  /** Para simplificar navegación */
  @Input() routerLink?: string | any[];

  /** Si quieres emitir eventos en lugar de usar routerLink */
  // @Output() click = new EventEmitter<MouseEvent>();
}
