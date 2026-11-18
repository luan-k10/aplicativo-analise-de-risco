import { Component, inject, input, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="topbar">
      <button type="button" class="icon-btn" aria-label="Abrir menu" (click)="menuAberto.set(true)">
        <span class="material-symbols-outlined">menu</span>
      </button>
      <span class="topbar-title">{{ titulo() }}</span>
      <a routerLink="/home" class="icon-btn" aria-label="Início">
        <span class="material-symbols-outlined">home</span>
      </a>
    </header>

    @if (menuAberto()) {
      <div class="backdrop" (click)="menuAberto.set(false)"></div>
      <nav class="side-menu" aria-label="Menu principal">
        <div class="side-user">
          <span class="material-symbols-outlined avatar">account_circle</span>
          <div>
            <strong>{{ auth.usuario()?.nome }}</strong>
            <small>Matrícula {{ auth.usuario()?.matricula }}</small>
          </div>
        </div>
        @for (item of menu; track item.rota) {
          <a
            [routerLink]="item.rota"
            routerLinkActive="ativo"
            class="side-link"
            (click)="menuAberto.set(false)"
          >
            <span class="material-symbols-outlined">{{ item.icone }}</span>
            {{ item.rotulo }}
          </a>
        }
        <button type="button" class="side-link sair" (click)="sair()">
          <span class="material-symbols-outlined">logout</span>
          Sair
        </button>
      </nav>
    }
  `,
  styles: `
    .topbar {
      position: sticky;
      top: 0;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      height: 56px;
      padding: 0 12px;
      background: var(--laranja);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
    }
    .topbar-title {
      flex: 1;
      font-weight: 600;
      font-size: 1rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .icon-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 50%;
      background: transparent;
      color: var(--texto);
      cursor: pointer;
      text-decoration: none;
    }
    .icon-btn:hover {
      background: rgba(255, 255, 255, 0.35);
    }
    .backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.35);
      z-index: 20;
    }
    .side-menu {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: min(280px, 80vw);
      background: #fff;
      z-index: 30;
      display: flex;
      flex-direction: column;
      padding-bottom: 16px;
      box-shadow: 2px 0 12px rgba(0, 0, 0, 0.2);
    }
    .side-user {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 20px 16px;
      background: var(--laranja);
      margin-bottom: 8px;
    }
    .side-user small {
      display: block;
      color: var(--texto-suave);
    }
    .avatar {
      font-size: 44px;
    }
    .side-link {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 18px;
      color: var(--texto);
      text-decoration: none;
      background: none;
      border: none;
      font-size: 0.95rem;
      text-align: left;
      cursor: pointer;
    }
    .side-link:hover,
    .side-link.ativo {
      background: var(--pessego);
    }
    .sair {
      margin-top: auto;
      color: var(--vermelho);
    }
  `,
})
export class HeaderComponent {
  protected readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly titulo = input('');
  protected readonly menuAberto = signal(false);

  protected readonly menu = [
    { rota: '/home', rotulo: 'Início', icone: 'home' },
    { rota: '/analise/nova', rotulo: 'Criar análise de risco', icone: 'note_add' },
    { rota: '/analise/buscar', rotulo: 'Buscar análise de risco', icone: 'search' },
    { rota: '/equipe', rotulo: 'Adicionar equipe', icone: 'group_add' },
    { rota: '/autorizar', rotulo: 'Autorizar análise de risco', icone: 'verified' },
  ];

  sair(): void {
    this.menuAberto.set(false);
    this.auth.sair();
    this.router.navigate(['/login']);
  }
}
