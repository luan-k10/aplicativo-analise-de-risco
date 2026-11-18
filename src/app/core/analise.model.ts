import {
  CHECKLIST_ESPECIFICO,
  CHECKLIST_PADRAO,
  CONDICOES,
  EPI_EPC,
  FONTES_ENERGIA,
  MEIO_AMBIENTE,
  PREPARACAO,
  RISCOS_LOCAIS,
  TOTAL_EXECUTANTES,
  TOTAL_REAVALIACOES,
} from './analise-form.data';

/** Resposta Sim/Não ('' = não respondido). */
export type SimNao = 'S' | 'N' | '';

export type StatusAnalise = 'pendente' | 'aprovada' | 'rejeitada';

export interface PerguntaResposta {
  resposta: SimNao;
  acao: string;
}

export interface CondicaoEspecial {
  marcado: boolean;
  itens: boolean[];
}

export interface ItemEpi {
  marcado: boolean;
  detalhe: string;
}

export interface GrupoMeioAmbiente {
  resposta: SimNao;
  itens: boolean[];
}

export interface Executante {
  nome: string;
  matricula: string;
  ciente: SimNao;
}

export interface AnaliseRisco {
  codigo: string;
  status: StatusAnalise;
  criadoEm: string;
  criadoPor: string;
  avaliadoPor?: string;
  avaliadoEm?: string;

  cabecalho: {
    direitoTrabalhoSeguro: boolean;
    motivo: string;
    empresa: string;
    data: string;
    servico: string;
    local: string;
  };

  /** Seção 1 – alinhado por índice com CONDICOES. */
  condicoes: CondicaoEspecial[];
  extrasCondicoes: {
    alturaRotineira: SimNao;
    alturaSupervisaoPresencial: SimNao;
    alturaFormaSupervisao: string;
    quimicosRotineiraCal: SimNao;
    espacoConfinadoClasse: '' | '1' | '2';
    fontesEnergia: boolean[];
    cicloTrabalho: string;
    cicloDescanso: string;
  };

  /** Seção 2 – alinhado por índice com PREPARACAO. */
  preparacao: PerguntaResposta[];
  planoIcamento: SimNao;

  /** Seção 3. */
  checklistPadrao: boolean[];
  checklistEspecifico: boolean[];
  checklistOutros: string;

  /** Seção 4. */
  responsavelExecucao: { nome: string; matricula: string };

  /** Seção 5. */
  cienciaArea: {
    empresa: '' | 'ArcelorMittal' | 'Contratada';
    nome: string;
    matricula: string;
    ramal: string;
    data: string;
    horaInicio: string;
    horaFim: string;
  };

  /** Seção 6 – alinhado por índice com EPI_EPC. */
  epi: ItemEpi[][];

  /** Seção 7. */
  emergencia: { rotaFuga: SimNao; resgateEspecial: SimNao };

  /** Seção 8 – alinhado por índice com MEIO_AMBIENTE. */
  meioAmbiente: GrupoMeioAmbiente[];

  /** Seção 9 – alinhado por índice com RISCOS_LOCAIS. */
  riscos: PerguntaResposta[];
  reavaliacoes: string[];
  observacoes: string;

  /** Seção 10. */
  executantes: Executante[];
}

const pergunta = (): PerguntaResposta => ({ resposta: '', acao: '' });
const falsos = (n: number): boolean[] => Array.from({ length: n }, () => false);

export function hoje(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

/** Cria uma análise em branco, com todas as seções do formulário. */
export function criarAnaliseVazia(): AnaliseRisco {
  return {
    codigo: '',
    status: 'pendente',
    criadoEm: '',
    criadoPor: '',
    cabecalho: {
      direitoTrabalhoSeguro: false,
      motivo: '',
      empresa: '',
      data: hoje(),
      servico: '',
      local: '',
    },
    condicoes: CONDICOES.map((c) => ({ marcado: false, itens: falsos(c.itens.length) })),
    extrasCondicoes: {
      alturaRotineira: '',
      alturaSupervisaoPresencial: '',
      alturaFormaSupervisao: '',
      quimicosRotineiraCal: '',
      espacoConfinadoClasse: '',
      fontesEnergia: falsos(FONTES_ENERGIA.length),
      cicloTrabalho: '',
      cicloDescanso: '',
    },
    preparacao: PREPARACAO.map(pergunta),
    planoIcamento: '',
    checklistPadrao: falsos(CHECKLIST_PADRAO.length),
    checklistEspecifico: falsos(CHECKLIST_ESPECIFICO.length),
    checklistOutros: '',
    responsavelExecucao: { nome: '', matricula: '' },
    cienciaArea: {
      empresa: '',
      nome: '',
      matricula: '',
      ramal: '',
      data: '',
      horaInicio: '',
      horaFim: '',
    },
    epi: EPI_EPC.map((g) => g.itens.map(() => ({ marcado: false, detalhe: '' }))),
    emergencia: { rotaFuga: '', resgateEspecial: '' },
    meioAmbiente: MEIO_AMBIENTE.map((g) => ({ resposta: '', itens: falsos(g.itens.length) })),
    riscos: RISCOS_LOCAIS.map(pergunta),
    reavaliacoes: Array.from({ length: TOTAL_REAVALIACOES }, () => ''),
    observacoes: '',
    executantes: Array.from({ length: TOTAL_EXECUTANTES }, () => ({
      nome: '',
      matricula: '',
      ciente: '' as SimNao,
    })),
  };
}

/** Retorna a lista de pendências que impedem salvar a análise. */
export function validarAnalise(a: AnaliseRisco): string[] {
  const erros: string[] = [];
  const vazio = (v: string) => !v || !v.trim();

  if (vazio(a.cabecalho.empresa)) erros.push('Informe a empresa.');
  if (vazio(a.cabecalho.data)) erros.push('Informe a data.');
  if (vazio(a.cabecalho.servico)) erros.push('Descreva o serviço.');
  if (vazio(a.cabecalho.local)) erros.push('Informe o local.');
  if (a.cabecalho.direitoTrabalhoSeguro && vazio(a.cabecalho.motivo)) {
    erros.push('Informe o motivo do Direito ao Trabalho Seguro.');
  }
  if (vazio(a.responsavelExecucao.nome) || vazio(a.responsavelExecucao.matricula)) {
    erros.push('Informe nome e matrícula do responsável pela execução (seção 4).');
  }

  const semAcao = a.riscos.some((r) => r.resposta === 'S' && vazio(r.acao));
  if (semAcao)
    erros.push('Descreva a ação para todos os riscos locais marcados como "S" (seção 9).');

  const temExecutante = a.executantes.some((e) => !vazio(e.nome));
  if (!temExecutante) erros.push('Inclua ao menos um executante/envolvido (seção 10).');

  return erros;
}
