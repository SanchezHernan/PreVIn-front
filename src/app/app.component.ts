import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PreVIn-fe';
}
