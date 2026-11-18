import { Injectable, inject, signal } from '@angular/core';
import { StorageService } from './storage.service';

export interface MembroEquipe {
  nome: string;
  matricula: string;
  selecionado: boolean;
}

const CHAVE_EQUIPE = 'ar.equipe';

const EQUIPE_INICIAL: MembroEquipe[] = [
  { nome: 'João', matricula: '70144157', selecionado: true },
  { nome: 'Thayno', matricula: '70144357', selecionado: true },
  { nome: 'Marcelo', matricula: '70144852', selecionado: true },
  { nome: 'André', matricula: '70144257', selecionado: true },
];

@Injectable({ providedIn: 'root' })
export class EquipeService {
  private readonly storage = inject(StorageService);
  private readonly _membros = signal<MembroEquipe[]>(
    this.storage.ler<MembroEquipe[]>(CHAVE_EQUIPE, EQUIPE_INICIAL),
  );

  readonly membros = this._membros.asReadonly();

  selecionados(): MembroEquipe[] {
    return this._membros().filter((m) => m.selecionado);
  }

  salvar(membros: MembroEquipe[]): void {
    const copia = membros.map((m) => ({ ...m }));
    this._membros.set(copia);
    this.storage.gravar(CHAVE_EQUIPE, copia);
  }
}
