import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analise-risco-form-nivel-impacto',
  imports: [CommonModule],
  templateUrl: './analise-risco-form-nivel-impacto.component.html',
  styleUrl: './analise-risco-form-nivel-impacto.component.css',
})
export class AnaliseRiscoFormNivelImpactoComponent {
  selectedImpacto: string | null = null;

  selectImpacto(nivel: string) {
    this.selectedImpacto = nivel;
  }
}
