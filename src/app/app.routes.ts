import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { CadastroComponent } from './cadastro/cadastro.component';
// 1. Importe o componente do Dashboard aqui (ajuste o caminho se necessário):
import { DashboardComponent } from './dashboard/dashboard.component'; 

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  // 2. Adicione a rota do dashboard aqui:
  { path: 'dashboard', component: DashboardComponent }, 
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
