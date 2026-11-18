import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../shared/header/header';
import { EquipeService, MembroEquipe } from '../core/equipe.service';

@Component({
  selector: 'app-equipe',
  imports: [FormsModule, HeaderComponent],
  template: `
    <app-header titulo="Adicionar membros da equipe" />
    <div class="page">
      <div class="page-content">
        <p class="page-title">Equipe:</p>

        <ul class="lista">
          @for (m of membros(); track m.matricula; let i = $index) {
            <li>
              <label>
                <input
                  type="checkbox"
                  [(ngModel)]="m.selecionado"
                  (ngModelChange)="salvo.set(false)"
                />
                <span>{{ m.nome }}</span>
                <small>{{ m.matricula }}</small>
              </label>
              <button
                type="button"
                class="remover"
                [attr.aria-label]="'Remover ' + m.nome"
                (click)="remover(i)"
              >
                <span class="material-symbols-outlined">delete</span>
              </button>
            </li>
          } @empty {
            <li class="lista-vazia">Nenhum membro cadastrado.</li>
          }
        </ul>

        <p class="sub">Novo membro</p>
        <form class="novo" (ngSubmit)="adicionar()">
          <input class="input" name="nome" placeholder="Nome" [(ngModel)]="nome" />
          <input class="input" name="matricula" placeholder="Matrícula" [(ngModel)]="matricula" />
          <button type="submit" class="btn-secondary" aria-label="Adicionar membro">
            <span class="material-symbols-outlined">person_add</span>
          </button>
        </form>
        @if (erro()) {
          <p class="msg-erro">{{ erro() }}</p>
        }
        @if (salvo()) {
          <p class="msg-sucesso">Equipe salva com sucesso.</p>
        }

        <button type="button" class="btn-primary salvar" (click)="salvar()">Salvar</button>
      </div>
    </div>
  `,
  styles: `
    .lista {
      list-style: none;
      padding: 0;
      margin: 0 0 20px;
    }
    .lista li {
      display: flex;
      align-items: center;
      background: var(--pessego);
      border-radius: var(--raio);
      padding: 4px 8px 4px 14px;
      margin-bottom: 10px;
    }
    .lista label {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 0;
      cursor: pointer;
    }
    .lista input {
      width: 20px;
      height: 20px;
      accent-color: var(--laranja-escuro);
    }
    .lista span {
      flex: 1;
      font-weight: 600;
    }
    .lista small {
      color: var(--texto-suave);
    }
    .remover {
      background: none;
      border: none;
      color: var(--texto-suave);
      cursor: pointer;
      padding: 6px;
    }
    .sub {
      font-weight: 700;
      margin-bottom: 8px;
    }
    .novo {
      display: grid;
      grid-template-columns: 1fr 1fr auto;
      gap: 8px;
    }
    .salvar {
      margin-top: 24px;
    }
  `,
})
export class EquipeComponent {
  private readonly service = inject(EquipeService);

  protected readonly membros = signal<MembroEquipe[]>(
    this.service.membros().map((m) => ({ ...m })),
  );
  protected nome = '';
  protected matricula = '';
  protected readonly erro = signal('');
  protected readonly salvo = signal(false);

  adicionar(): void {
    const nome = this.nome.trim();
    const matricula = this.matricula.trim();
    if (!nome || !matricula) {
      this.erro.set('Informe nome e matrícula do novo membro.');
      return;
    }
    if (this.membros().some((m) => m.matricula === matricula)) {
      this.erro.set('Já existe um membro com esta matrícula.');
      return;
    }
    this.membros.update((lista) => [...lista, { nome, matricula, selecionado: true }]);
    this.nome = '';
    this.matricula = '';
    this.erro.set('');
    this.salvo.set(false);
  }

  remover(indice: number): void {
    this.membros.update((lista) => lista.filter((_, i) => i !== indice));
    this.salvo.set(false);
  }

  salvar(): void {
    this.service.salvar(this.membros());
    this.salvo.set(true);
  }
}
