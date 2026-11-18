import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let auth: AuthService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    auth = TestBed.inject(AuthService);
  });

  const usuario = {
    nome: 'André',
    email: 'Andre@Empresa.com',
    matricula: '70144257',
    senha: 'segredo1',
  };

  it('cadastra e autentica por matrícula ou e-mail', async () => {
    await auth.cadastrar(usuario);

    expect(await auth.entrar('70144257', 'errada')).toBe(false);
    expect(auth.autenticado()).toBe(false);

    expect(await auth.entrar('andre@empresa.com', 'segredo1')).toBe(true);
    expect(auth.usuario()?.nome).toBe('André');

    auth.sair();
    expect(auth.autenticado()).toBe(false);
    expect(await auth.entrar('70144257', 'segredo1')).toBe(true);
  });

  it('não grava a senha em texto puro', async () => {
    await auth.cadastrar(usuario);
    expect(localStorage.getItem('ar.usuarios')).not.toContain('segredo1');
  });

  it('rejeita matrícula duplicada', async () => {
    await auth.cadastrar(usuario);
    await expect(auth.cadastrar({ ...usuario, email: 'outro@empresa.com' })).rejects.toThrow();
  });
});
