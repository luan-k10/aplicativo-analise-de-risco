import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnaliseRisco } from '../../core/analise.model';

export const ROTULO_STATUS = {
  pendente: 'Pendente',
  aprovada: 'Aprovada',
  rejeitada: 'Rejeitada',
} as const;

/** Card com o resumo de uma análise. Ações extras podem ser projetadas via <ng-content>. */
@Component({
  selector: 'app-analise-card',
  imports: [RouterLink, DatePipe],
  template: `
    <article class="card">
      <a class="info" [routerLink]="['/analise', analise().codigo]">
        <div class="linha">
          <strong>Código: {{ analise().codigo }}</strong>
          <span [class]="'badge badge-' + analise().status">
            {{ rotulos[analise().status] }}
          </span>
        </div>
        <span>
          executor: {{ analise().responsavelExecucao.nome }}
          {{ analise().responsavelExecucao.matricula }}
        </span>
        <small>
          {{ analise().cabecalho.servico }} · {{ analise().cabecalho.local }} ·
          {{ analise().criadoEm | date: 'dd/MM/yyyy HH:mm' }}
        </small>
      </a>
      <div class="acoes"><ng-content /></div>
    </article>
  `,
  styles: `
    .card {
      display: flex;
      align-items: center;
      gap: 10px;
      background: var(--pessego);
      border-radius: var(--raio);
      padding: 14px 16px;
      margin-bottom: 12px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    }
    .info {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 4px;
      color: var(--texto);
      text-decoration: none;
    }
    .linha {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }
    small {
      color: var(--texto-suave);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .acoes {
      display: flex;
      gap: 8px;
    }
    .acoes:empty {
      display: none;
    }
  `,
})
export class AnaliseCardComponent {
  readonly analise = input.required<AnaliseRisco>();
  protected readonly rotulos = ROTULO_STATUS;
}
