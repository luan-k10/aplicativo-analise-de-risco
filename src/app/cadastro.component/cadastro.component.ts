import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  protected dados = { email: '', nome: '', matricula: '', senha: '', confirmarSenha: '' };
  protected readonly mostrarSenha = signal(false);
  protected readonly erro = signal('');
  protected readonly sucesso = signal(false);

  /** Retorna a mensagem de erro de validação, ou string vazia se válido. */
  validar(): string {
    const d = this.dados;
    if (!d.email.trim() || !d.nome.trim() || !d.matricula.trim() || !d.senha) {
      return 'Preencha todos os campos.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim())) {
      return 'Informe um e-mail válido.';
    }
    if (d.senha.length < 6) {
      return 'A senha deve ter ao menos 6 caracteres.';
    }
    if (d.senha !== d.confirmarSenha) {
      return 'As senhas não conferem.';
    }
    return '';
  }

  async cadastrar(): Promise<void> {
    const erro = this.validar();
    this.erro.set(erro);
    if (erro) {
      return;
    }
    try {
      await this.auth.cadastrar(this.dados);
      this.sucesso.set(true);
      setTimeout(() => this.router.navigate(['/login']), 1200);
    } catch (e) {
      this.erro.set(e instanceof Error ? e.message : 'Não foi possível cadastrar.');
    }
  }
}
