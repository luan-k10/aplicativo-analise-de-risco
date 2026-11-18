import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { CadastroComponent } from './cadastro.component/cadastro.component';
import { authGuard, visitanteGuard } from './core/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [visitanteGuard] },
  { path: 'cadastro', component: CadastroComponent, canActivate: [visitanteGuard] },
  {
    path: '',
    canActivateChild: [authGuard],
    children: [
      { path: 'home', loadComponent: () => import('./home/home').then((m) => m.HomeComponent) },
      {
        path: 'analise/nova',
        loadComponent: () =>
          import('./analise/form/analise-form').then((m) => m.AnaliseFormComponent),
      },
      {
        path: 'analise/buscar',
        loadComponent: () =>
          import('./analise/buscar/buscar-analise').then((m) => m.BuscarAnaliseComponent),
      },
      {
        path: 'analise/:codigo',
        loadComponent: () =>
          import('./analise/form/analise-form').then((m) => m.AnaliseFormComponent),
      },
      {
        path: 'equipe',
        loadComponent: () => import('./equipe/equipe').then((m) => m.EquipeComponent),
      },
      {
        path: 'autorizar',
        loadComponent: () => import('./autorizar/autorizar').then((m) => m.AutorizarComponent),
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'login' },
];
