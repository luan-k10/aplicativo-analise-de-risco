import { Injectable, inject, signal } from '@angular/core';
import { AnaliseRisco, StatusAnalise } from './analise.model';
import { StorageService } from './storage.service';
import { Usuario } from './auth.service';

const CHAVE_ANALISES = 'ar.analises';

@Injectable({ providedIn: 'root' })
export class AnaliseService {
  private readonly storage = inject(StorageService);
  private readonly _analises = signal<AnaliseRisco[]>(
    this.storage.ler<AnaliseRisco[]>(CHAVE_ANALISES, []),
  );

  readonly analises = this._analises.asReadonly();

  obter(codigo: string): AnaliseRisco | undefined {
    const alvo = codigo.trim();
    return this._analises().find((a) => a.codigo === alvo);
  }

  /** Filtra por código, nome ou matrícula do executor. Termo vazio retorna todas. */
  buscar(termo: string): AnaliseRisco[] {
    const t = termo.trim().toLowerCase();
    const todas = [...this._analises()].sort((a, b) => b.criadoEm.localeCompare(a.criadoEm));
    if (!t) {
      return todas;
    }
    return todas.filter(
      (a) =>
        a.codigo.includes(t) ||
        a.responsavelExecucao.nome.toLowerCase().includes(t) ||
        a.responsavelExecucao.matricula.toLowerCase().includes(t),
    );
  }

  /** Salva uma nova análise, gerando o código no formato 0000-000. */
  criar(dados: AnaliseRisco, autor: Usuario | null): AnaliseRisco {
    const nova: AnaliseRisco = {
      ...structuredClone(dados),
      codigo: this.gerarCodigo(),
      status: 'pendente',
      criadoEm: new Date().toISOString(),
      criadoPor: autor?.matricula ?? '',
    };
    this.persistir([...this._analises(), nova]);
    return nova;
  }

  atualizarStatus(codigo: string, status: StatusAnalise, avaliador: Usuario | null): void {
    this.persistir(
      this._analises().map((a) =>
        a.codigo === codigo
          ? {
              ...a,
              status,
              avaliadoPor: avaliador?.matricula ?? '',
              avaliadoEm: new Date().toISOString(),
            }
          : a,
      ),
    );
  }

  gerarCodigo(): string {
    const aleatorio = (digitos: number) =>
      String(Math.floor(Math.random() * 10 ** digitos)).padStart(digitos, '0');
    let codigo: string;
    do {
      codigo = `${aleatorio(4)}-${aleatorio(3)}`;
    } while (this.obter(codigo));
    return codigo;
  }

  private persistir(analises: AnaliseRisco[]): void {
    this._analises.set(analises);
    this.storage.gravar(CHAVE_ANALISES, analises);
  }
}
