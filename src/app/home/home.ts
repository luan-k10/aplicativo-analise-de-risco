import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../shared/header/header';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, HeaderComponent],
  template: `
    <app-header titulo="Início" />
    <div class="page">
      <div class="page-content">
        <div class="perfil">
          <span class="material-symbols-outlined avatar">account_circle</span>
          <strong>{{ auth.usuario()?.nome }}</strong>
          <small>Matrícula {{ auth.usuario()?.matricula }}</small>
        </div>
        <nav class="opcoes">
          @for (o of opcoes; track o.rota) {
            <a [routerLink]="o.rota" class="opcao">
              <span class="material-symbols-outlined">{{ o.icone }}</span>
              {{ o.rotulo }}
            </a>
          }
        </nav>
      </div>
    </div>
  `,
  styles: `
    .perfil {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      margin: 10px 0 28px;
    }
    .perfil small {
      color: var(--texto-suave);
    }
    .avatar {
      font-size: 96px;
      color: var(--laranja-escuro);
    }
    .opcoes {
      display: flex;
      flex-direction: column;
      gap: 14px;
      max-width: 420px;
      margin: 0 auto;
    }
    .opcao {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 18px 20px;
      background: var(--pessego);
      border-radius: var(--raio);
      color: var(--texto);
      text-decoration: none;
      font-weight: 600;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
      transition: transform 0.15s;
    }
    .opcao:hover {
      transform: translateY(-2px);
    }
    .opcao .material-symbols-outlined {
      font-size: 30px;
    }
  `,
})
export class HomeComponent {
  protected readonly auth = inject(AuthService);
  protected readonly opcoes = [
    { rota: '/analise/nova', rotulo: 'Criar análise de risco', icone: 'note_add' },
    { rota: '/analise/buscar', rotulo: 'Buscar análise de risco', icone: 'search' },
    { rota: '/equipe', rotulo: 'Adicionar equipe', icone: 'group_add' },
    { rota: '/autorizar', rotulo: 'Autorizar análise de risco', icone: 'verified' },
  ];
}
