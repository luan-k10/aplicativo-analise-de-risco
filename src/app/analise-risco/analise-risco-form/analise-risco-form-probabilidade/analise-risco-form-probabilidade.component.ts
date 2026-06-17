import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analise-risco-form-probabilidade',
  imports: [CommonModule],
  templateUrl: './analise-risco-form-probabilidade.component.html',
  styleUrl: './analise-risco-form-probabilidade.component.css',
})
export class AnaliseRiscoFormProbabilidadeComponent {
  selectedProbabilidade: string | null = null;

  selectProbabilidade(nivel: string) {
    this.selectedProbabilidade = nivel;
  }
}
