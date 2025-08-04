import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private router = inject(Router);

  public buttonRoutes: Array<{ path: string; label: string }> = [];

  ngOnInit() {
    this.buttonRoutes = this.router.config
      .filter(r =>
        !!(r.path) &&
        r.path !== '**' &&
        !!(r.component) &&
        r.data?.['label']
      )
      .map(r => ({
        path: r.path!,
        label: (r.data as any).label
      }));
  }

}
