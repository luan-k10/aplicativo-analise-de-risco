import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analise-risco-nav',
  standalone: true,
  imports: [],
  templateUrl: './analise-risco-header-nav.component.html',
  styleUrl: './analise-risco-header-nav.component.css',
})
export class AnaliseRiscoHeaderNavComponent {
  constructor(private router: Router) {}

  voltar() {
    this.router.navigate(['/dashboard']);
  }
}
