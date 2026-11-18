import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header';
import { AnaliseCardComponent } from '../../shared/analise-card/analise-card';
import { AnaliseService } from '../../core/analise.service';

@Component({
  selector: 'app-buscar-analise',
  imports: [HeaderComponent, AnaliseCardComponent],
  template: `
    <app-header titulo="Buscar análise de risco" />
    <div class="page">
      <div class="page-content">
        <p class="page-title">Insira o código da análise de risco.</p>
        <form class="busca" (submit)="abrir($event)">
          <span class="material-symbols-outlined">search</span>
          <input
            type="search"
            placeholder="ex: 1234-569"
            aria-label="Código, nome ou matrícula"
            [value]="termo()"
            (input)="termo.set($any($event.target).value)"
          />
        </form>
        @for (a of resultados(); track a.codigo) {
          <app-analise-card [analise]="a" />
        } @empty {
          <p class="lista-vazia">
            {{ termo() ? 'Nenhuma análise encontrada.' : 'Nenhuma análise cadastrada ainda.' }}
          </p>
        }
      </div>
    </div>
  `,
})
export class BuscarAnaliseComponent {
  private readonly service = inject(AnaliseService);
  private readonly router = inject(Router);

  protected readonly termo = signal('');
  protected readonly resultados = computed(() => {
    this.service.analises();
    return this.service.buscar(this.termo());
  });

  /** Enter com um código exato abre a análise diretamente. */
  abrir(evento: Event): void {
    evento.preventDefault();
    const analise = this.service.obter(this.termo());
    if (analise) {
      this.router.navigate(['/analise', analise.codigo]);
    }
  }
}
