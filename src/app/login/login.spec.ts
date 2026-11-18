import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { LoginComponent } from './login';
import { AuthService } from '../core/auth.service';

describe('LoginComponent', () => {
  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('mostra erro com credenciais inválidas e navega para /home com credenciais válidas', async () => {
    await TestBed.inject(AuthService).cadastrar({
      nome: 'João',
      email: 'joao@empresa.com',
      matricula: '70144157',
      senha: 'segredo1',
    });
    const navigate = vi.spyOn(TestBed.inject(Router), 'navigate').mockResolvedValue(true);
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance as unknown as {
      matricula: string;
      senha: string;
      entrar(): Promise<void>;
    };

    login.matricula = '70144157';
    login.senha = 'errada';
    await login.entrar();
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Matrícula ou senha inválida');
    expect(navigate).not.toHaveBeenCalled();

    login.senha = 'segredo1';
    await login.entrar();
    expect(navigate).toHaveBeenCalledWith(['/home']);
  });
});
