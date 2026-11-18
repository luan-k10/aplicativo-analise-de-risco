import { Injectable, computed, inject, signal } from '@angular/core';
import { StorageService } from './storage.service';

export interface Usuario {
  nome: string;
  email: string;
  matricula: string;
}

export interface NovoUsuario extends Usuario {
  senha: string;
}

interface UsuarioArmazenado extends Usuario {
  senhaHash: string;
}

const CHAVE_USUARIOS = 'ar.usuarios';
const CHAVE_SESSAO = 'ar.sessao';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly storage = inject(StorageService);
  private readonly _usuario = signal<Usuario | null>(
    this.storage.ler<Usuario | null>(CHAVE_SESSAO, null),
  );

  readonly usuario = this._usuario.asReadonly();
  readonly autenticado = computed(() => this._usuario() !== null);

  async cadastrar(dados: NovoUsuario): Promise<void> {
    const email = dados.email.trim().toLowerCase();
    const matricula = dados.matricula.trim();
    const usuarios = this.lerUsuarios();
    if (usuarios.some((u) => u.matricula === matricula || u.email === email)) {
      throw new Error('Já existe um usuário com esta matrícula ou e-mail.');
    }
    usuarios.push({
      nome: dados.nome.trim(),
      email,
      matricula,
      senhaHash: await gerarHash(dados.senha),
    });
    this.storage.gravar(CHAVE_USUARIOS, usuarios);
  }

  /** Aceita matrícula ou e-mail como identificação. */
  async entrar(login: string, senha: string): Promise<boolean> {
    const id = login.trim().toLowerCase();
    const usuario = this.lerUsuarios().find(
      (u) => u.matricula.toLowerCase() === id || u.email === id,
    );
    if (!usuario || usuario.senhaHash !== (await gerarHash(senha))) {
      return false;
    }
    const sessao: Usuario = {
      nome: usuario.nome,
      email: usuario.email,
      matricula: usuario.matricula,
    };
    this.storage.gravar(CHAVE_SESSAO, sessao);
    this._usuario.set(sessao);
    return true;
  }

  sair(): void {
    this.storage.remover(CHAVE_SESSAO);
    this._usuario.set(null);
  }

  private lerUsuarios(): UsuarioArmazenado[] {
    return this.storage.ler<UsuarioArmazenado[]>(CHAVE_USUARIOS, []);
  }
}

async function gerarHash(texto: string): Promise<string> {
  try {
    const dados = new TextEncoder().encode(texto);
    const buffer = await globalThis.crypto.subtle.digest('SHA-256', dados);
    return Array.from(new Uint8Array(buffer))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  } catch {
    // Contextos sem SubtleCrypto (ex.: HTTP fora de localhost): hash simples de fallback.
    let h = 5381;
    for (let i = 0; i < texto.length; i++) {
      h = ((h << 5) + h + texto.charCodeAt(i)) | 0;
    }
    return 'f' + (h >>> 0).toString(16);
  }
}
