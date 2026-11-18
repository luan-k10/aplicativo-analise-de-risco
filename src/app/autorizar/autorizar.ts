import { Component, computed, inject, signal } from '@angular/core';
import { HeaderComponent } from '../shared/header/header';
import { AnaliseCardComponent } from '../shared/analise-card/analise-card';
import { AnaliseService } from '../core/analise.service';
import { AuthService } from '../core/auth.service';
import { StatusAnalise } from '../core/analise.model';

@Component({
  selector: 'app-autorizar',
  imports: [HeaderComponent, AnaliseCardComponent],
  template: `
    <app-header titulo="Autorizar análise de risco" />
    <div class="page">
      <div class="page-content">
        <div class="busca">
          <span class="material-symbols-outlined">search</span>
          <input
            type="search"
            placeholder="ex: 1234-569"
            aria-label="Buscar análise"
            [value]="termo()"
            (input)="termo.set($any($event.target).value)"
          />
        </div>

        <div class="filtros" role="tablist">
          @for (f of filtros; track f.valor) {
            <button
              type="button"
              role="tab"
              [class.ativo]="filtro() === f.valor"
              [attr.aria-selected]="filtro() === f.valor"
              (click)="filtro.set(f.valor)"
            >
              {{ f.rotulo }}
            </button>
          }
        </div>

        @for (a of resultados(); track a.codigo) {
          <app-analise-card [analise]="a">
            @if (a.status === 'pendente') {
              <button
                type="button"
                class="acao aprovar"
                [attr.aria-label]="'Aprovar ' + a.codigo"
                (click)="avaliar(a.codigo, 'aprovada')"
              >
                <span class="material-symbols-outlined">check</span>
              </button>
              <button
                type="button"
                class="acao rejeitar"
                [attr.aria-label]="'Rejeitar ' + a.codigo"
                (click)="avaliar(a.codigo, 'rejeitada')"
              >
                <span class="material-symbols-outlined">close</span>
              </button>
            }
          </app-analise-card>
        } @empty {
          <p class="lista-vazia">
            Nenhuma análise {{ filtro() === 'pendente' ? 'pendente' : '' }} encontrada.
          </p>
        }
      </div>
    </div>
  `,
  styles: `
    .filtros {
      display: flex;
      gap: 8px;
      margin-bottom: 16px;
    }
    .filtros button {
      border: 1.5px solid var(--borda);
      background: #fff;
      border-radius: 20px;
      padding: 6px 14px;
      cursor: pointer;
      font-size: 0.85rem;
    }
    .filtros button.ativo {
      background: var(--laranja);
      border-color: var(--laranja);
      font-weight: 600;
    }
    .acao {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      border: none;
      border-radius: 50%;
      color: #fff;
      cursor: pointer;
    }
    .aprovar {
      background: var(--verde);
    }
    .rejeitar {
      background: var(--vermelho);
    }
  `,
})
export class AutorizarComponent {
  private readonly service = inject(AnaliseService);
  private readonly auth = inject(AuthService);

  protected readonly filtros: { valor: StatusAnalise | 'todas'; rotulo: string }[] = [
    { valor: 'pendente', rotulo: 'Pendentes' },
    { valor: 'todas', rotulo: 'Todas' },
  ];
  protected readonly termo = signal('');
  protected readonly filtro = signal<StatusAnalise | 'todas'>('pendente');
  protected readonly resultados = computed(() => {
    this.service.analises();
    const filtro = this.filtro();
    return this.service
      .buscar(this.termo())
      .filter((a) => filtro === 'todas' || a.status === filtro);
  });

  avaliar(codigo: string, status: StatusAnalise): void {
    this.service.atualizarStatus(codigo, status, this.auth.usuario());
  }
}
