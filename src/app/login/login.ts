import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  protected matricula = '';
  protected senha = '';
  protected readonly mostrarSenha = signal(false);
  protected readonly erro = signal('');
  protected readonly info = signal('');
  protected readonly enviando = signal(false);

  async entrar(): Promise<void> {
    this.info.set('');
    if (!this.matricula.trim() || !this.senha) {
      this.erro.set('Informe matrícula e senha.');
      return;
    }
    this.enviando.set(true);
    const ok = await this.auth.entrar(this.matricula, this.senha);
    this.enviando.set(false);
    if (!ok) {
      this.erro.set('Matrícula ou senha inválida.');
      return;
    }
    this.erro.set('');
    await this.router.navigate(['/home']);
  }

  esqueceuSenha(): void {
    this.erro.set('');
    this.info.set('Procure o administrador do sistema para redefinir sua senha.');
  }
}
