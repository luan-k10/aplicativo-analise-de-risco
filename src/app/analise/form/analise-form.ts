import { Component, OnInit, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header';
import { SimNaoComponent } from '../../shared/sim-nao/sim-nao';
import { ROTULO_STATUS } from '../../shared/analise-card/analise-card';
import { AuthService } from '../../core/auth.service';
import { AnaliseService } from '../../core/analise.service';
import { EquipeService } from '../../core/equipe.service';
import { AnaliseRisco, criarAnaliseVazia, validarAnalise } from '../../core/analise.model';
import {
  CHECKLIST_ESPECIFICO,
  CHECKLIST_PADRAO,
  CONDICOES,
  EPI_EPC,
  FONTES_ENERGIA,
  INDICE_ICAR_CARGAS,
  MEIO_AMBIENTE,
  PREPARACAO,
  RISCOS_LOCAIS,
  TELEFONES_EMERGENCIA,
} from '../../core/analise-form.data';

/** Formulário PE-SGS-0028. Em /analise/nova cria; em /analise/:codigo exibe somente leitura. */
@Component({
  selector: 'app-analise-form',
  imports: [FormsModule, RouterLink, DatePipe, HeaderComponent, SimNaoComponent],
  templateUrl: './analise-form.html',
  styleUrl: './analise-form.css',
})
export class AnaliseFormComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly auth = inject(AuthService);
  private readonly analises = inject(AnaliseService);
  private readonly equipe = inject(EquipeService);

  protected readonly condicoes = CONDICOES;
  protected readonly fontesEnergia = FONTES_ENERGIA;
  protected readonly preparacao = PREPARACAO;
  protected readonly indiceIcar = INDICE_ICAR_CARGAS;
  protected readonly checklistPadrao = CHECKLIST_PADRAO;
  protected readonly checklistEspecifico = CHECKLIST_ESPECIFICO;
  protected readonly indiceOutros = CHECKLIST_ESPECIFICO.indexOf('Outros');
  protected readonly epiEpc = EPI_EPC;
  protected readonly meioAmbiente = MEIO_AMBIENTE;
  protected readonly riscosLocais = RISCOS_LOCAIS;
  protected readonly telefones = TELEFONES_EMERGENCIA;
  protected readonly rotulosStatus = ROTULO_STATUS;

  protected a: AnaliseRisco = criarAnaliseVazia();
  protected somenteLeitura = false;
  protected readonly naoEncontrada = signal(false);
  protected readonly erros = signal<string[]>([]);
  protected readonly salva = signal<AnaliseRisco | null>(null);

  ngOnInit(): void {
    const codigo = this.route.snapshot.paramMap.get('codigo');
    if (codigo) {
      this.somenteLeitura = true;
      const existente = this.analises.obter(codigo);
      if (existente) {
        this.a = structuredClone(existente);
      } else {
        this.naoEncontrada.set(true);
      }
      return;
    }
    const usuario = this.auth.usuario();
    if (usuario) {
      this.a.responsavelExecucao = { nome: usuario.nome, matricula: usuario.matricula };
    }
  }

  preencherComEquipe(): void {
    const membros = this.equipe.selecionados();
    this.a.executantes = this.a.executantes.map((e, i) =>
      membros[i] ? { nome: membros[i].nome, matricula: membros[i].matricula, ciente: e.ciente } : e,
    );
  }

  salvar(): void {
    const erros = validarAnalise(this.a);
    this.erros.set(erros);
    if (erros.length) {
      globalThis.scrollTo?.({ top: 0, behavior: 'smooth' });
      return;
    }
    this.salva.set(this.analises.criar(this.a, this.auth.usuario()));
    globalThis.scrollTo?.({ top: 0, behavior: 'smooth' });
  }

  novaAnalise(): void {
    this.a = criarAnaliseVazia();
    this.salva.set(null);
    this.erros.set([]);
    this.ngOnInit();
  }

  imprimir(): void {
    globalThis.print?.();
  }
}
