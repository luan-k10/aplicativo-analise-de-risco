import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Persistência local (localStorage). Centraliza o acesso para que, no futuro,
 * os services possam trocar este armazenamento por chamadas a uma API.
 */
@Injectable({ providedIn: 'root' })
export class StorageService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  ler<T>(chave: string, padrao: T): T {
    if (!this.isBrowser) {
      return padrao;
    }
    try {
      const valor = localStorage.getItem(chave);
      return valor ? (JSON.parse(valor) as T) : padrao;
    } catch {
      return padrao;
    }
  }

  gravar<T>(chave: string, valor: T): void {
    if (this.isBrowser) {
      localStorage.setItem(chave, JSON.stringify(valor));
    }
  }

  remover(chave: string): void {
    if (this.isBrowser) {
      localStorage.removeItem(chave);
    }
  }
}
