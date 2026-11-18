import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CadastroComponent } from './cadastro.component';

describe('CadastroComponent', () => {
  it('exige que senha e confirmação sejam iguais', async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    const cadastro = TestBed.createComponent(CadastroComponent).componentInstance as unknown as {
      dados: Record<string, string>;
      validar(): string;
    };

    cadastro.dados = {
      email: 'a@b.com',
      nome: 'Ana',
      matricula: '123',
      senha: 'segredo1',
      confirmarSenha: 'outra',
    };
    expect(cadastro.validar()).toBe('As senhas não conferem.');

    cadastro.dados['confirmarSenha'] = 'segredo1';
    expect(cadastro.validar()).toBe('');
  });
});
