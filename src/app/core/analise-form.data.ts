/**
 * Definições do formulário de Análise de Risco Local.
 * Os textos seguem o documento original.
 */

export type ExtraCondicao = 'altura' | 'quimicos' | 'confinado' | 'bloqueio' | 'calor';

export interface CondicaoDef {
  id: string;
  titulo: string;
  itens: string[];
  extra?: ExtraCondicao;
}

export interface PerguntaDef {
  pergunta: string;
  acao: string;
}

export interface EpiItemDef {
  rotulo: string;
  /** Quando definido, exibe um campo de texto complementar (tipo, modelo etc.). */
  detalhe?: string;
}

export interface GrupoEpiDef {
  titulo: string;
  itens: EpiItemDef[];
}

export interface GrupoMeioAmbienteDef {
  titulo: string;
  itens: string[];
}

export const CONDICOES: CondicaoDef[] = [
  {
    id: 'altura',
    titulo: 'TRABALHO EM ALTURA',
    itens: [
      'Treinamento NR 35 e ASO válido, inspecionar e usar cinto de segurança',
      'Atividade em telhado, necessário vigia e mapa do telhado',
    ],
    extra: 'altura',
  },
  {
    id: 'maquina',
    titulo: 'MÁQUINA EM MOVIMENTO',
    itens: [
      'Manter fora do raio de ação da máquina',
      'Seguir orientação da sinalização da área',
      'Solicitar bloqueio caso tenha necessidade de permanecer no raio de ação',
    ],
  },
  {
    id: 'veiculo',
    titulo: 'VEÍCULO/EQUIPAMENTO MÓVEL EM MOVIMENTO',
    itens: [
      'Seguir sinalização',
      'Usar vestimenta refletiva',
      'Atentar para o sinal sonoro',
      'Manter fora do raio de ação',
      'Delimitar espaço entre homem x equipamento',
    ],
  },
  {
    id: 'carga',
    titulo: 'CARGA SUSPENSA',
    itens: [
      'Treinamento NR 11 e ASO válido para operador',
      'Treinamento para sinaleiro e identificação por colete refletivo',
      'Necessita de plano? Içamento/rigging',
      'Utilizar dispositivos auxiliares ("mão amiga", hastes, bastões imantados, cordas etc.)',
      'Permanecer fora do raio de ação da carga',
    ],
  },
  {
    id: 'metal',
    titulo: 'METAL LÍQUIDO',
    itens: [
      'Treinamento dos riscos da área',
      'Atenção à sinalização de advertência/Red Zone',
      'Usar vestimenta adequada (EPIs específicos)',
    ],
  },
  {
    id: 'abertura',
    titulo: 'ABERTURA VERTICAL/LATERAL (RISCO DE QUEDA DE NÍVEL DIFERENTE)',
    itens: [
      'Comunicar a operação da área',
      'Providenciar barreira física fixa (PROIBIDO USO DE FITA OU CORRENTE) e sinalização',
      'Sistema de proteção individual contra queda',
    ],
  },
  {
    id: 'radiacao',
    titulo: 'RADIAÇÃO IONIZANTE',
    itens: [
      'Trabalho próximo ou em medidores',
      'Solicitar medição por funcionário dosimetrado ou área de segurança',
      'Verificar se o equipamento foi liberado p/ atividade',
    ],
  },
  {
    id: 'quimicos',
    titulo: 'PRODUTOS QUÍMICOS',
    itens: ['Ler FISPQ'],
    extra: 'quimicos',
  },
  {
    id: 'confinado',
    titulo: 'ESPAÇO CONFINADO',
    itens: [
      'Treinamento NR 33 e ASO válido',
      'Solicitar liberação de entrada (PT) de acordo com a classe',
    ],
    extra: 'confinado',
  },
  {
    id: 'quente',
    titulo: 'TRABALHO A QUENTE',
    itens: [
      'Em tubulações/equipamentos que contenham produtos inflamáveis/combustíveis',
      'Solicitar liberação da Segurança do Trabalho com emissão do CID',
    ],
  },
  {
    id: 'ferreas',
    titulo: 'LINHAS FÉRREAS',
    itens: [
      'Bloqueio da locomotiva e da chave AMV',
      'Utilizar kit de sinalização',
      'Usar rádio comunicação entre equipes',
    ],
  },
  {
    id: 'gas',
    titulo: 'ÁREA COM PERIGO DE GÁS',
    itens: [
      'Consultar mapa de risco/documento de referência',
      'Utilizar detector multigás (proporção 1/1)',
      'Atividade não rotineira, sem padrão operacional ou com empregados não lotados na área exige Permissão de Trabalho',
    ],
  },
  {
    id: 'bloqueio',
    titulo: 'BLOQUEIO DE FONTES DE ENERGIA',
    itens: [
      'Usar cadeado individual identificado',
      'Checar pinos, travas, calços nos locais apropriados',
      'Checar energia residual, potencial, gravitacional',
      'Checar drenagem de acumuladores de pressão',
      'Realizar TESTE DE COMANDO e/ou POTENCIAL ZERO',
    ],
    extra: 'bloqueio',
  },
  {
    id: 'calor',
    titulo: 'EXPOSIÇÃO CONTÍNUA A FONTES ARTIFICIAIS DE CALOR',
    itens: ['Solicitar liberação da Segurança do Trabalho'],
    extra: 'calor',
  },
];

export const FONTES_ENERGIA: string[] = [
  'Energia elétrica',
  'Pneumática',
  'Hidráulica',
  'Armazenada (molas, baterias)',
  'Potencial',
  'Calor (água quente, vapor)',
  'Radiação ionizante',
];

export const PREPARACAO: PerguntaDef[] = [
  { pergunta: 'Possuo todas as ferramentas necessárias?', acao: 'Quais?' },
  {
    pergunta: 'É necessário isolamento ou sinalização de área?',
    acao: 'Como? Cones, telas, tapumes, placas...',
  },
  { pergunta: 'Há necessidade de iluminação adicional?', acao: 'Como? Quais equipamentos?' },
  {
    pergunta: 'Checar manuais, projetos, padrões, desenhos, FISPQ?',
    acao: 'Quais? Estão na frente de trabalho?',
  },
  { pergunta: 'Vigas de rolamentos?', acao: 'Como será ancoragem e bloqueio?' },
  { pergunta: 'Há necessidade de acompanhamento?', acao: 'Quem irá acompanhar?' },
  {
    pergunta: 'Limpar e/ou organizar antes ou depois do trabalho?',
    acao: 'Como? Lavar, varrer, carregar...?',
  },
  {
    pergunta: 'Movimentar peças, cargas, partes ou equipamentos?',
    acao: 'Como? Carrinho, ponte, talha?',
  },
  {
    pergunta: 'Há necessidade de ventilação ou exaustão do local?',
    acao: 'Como? Quais equipamentos?',
  },
  { pergunta: 'Plano de comunicação entre a equipe?', acao: 'Como? Rádio, sinais, telefone?' },
  {
    pergunta: 'Purgar, drenar, inertizar gases ou líquidos de tubulações ou tanques?',
    acao: 'Como? Quais?',
  },
  {
    pergunta: 'Içar cargas?',
    acao: 'Como? Ponte, talha? Usar guia? Qual o peso da carga? Necessita de plano de Rigging?',
  },
];

/** Índice da pergunta "Içar cargas?", que possui o complemento "Plano de içamento?". */
export const INDICE_ICAR_CARGAS = PREPARACAO.length - 1;

export const CHECKLIST_PADRAO: string[] = [
  'Escada móvel',
  'Cinto de segurança',
  'Ponto de ancoragem',
  'Linha de vida',
  'Acessório de içamento',
];

export const CHECKLIST_ESPECIFICO: string[] = [
  'Oxi-corte',
  'Máquina de solda',
  'Talha manual',
  'Talha elétrica',
  'Macaco corrente',
  'Andaime',
  'Plataforma elevatória móvel de trabalho',
  'Ferramentas manuais',
  'Empilhadeira',
  'Guindaste',
  'Guindauto',
  'Ponte rolante',
  'Ferramentas: hidráulica/pneumática/elétrica',
  'Outros',
];

export const EPI_EPC: GrupoEpiDef[] = [
  {
    titulo: 'CABEÇA',
    itens: [
      { rotulo: 'Capacete com jugular' },
      { rotulo: 'Protetor auricular' },
      { rotulo: 'Máscara de solda' },
      { rotulo: 'Óculos de proteção' },
      { rotulo: 'Óculos ampla visão' },
      { rotulo: 'Protetor facial completo' },
      { rotulo: 'Protetor facial arco elétrico' },
      { rotulo: 'Resp. descartável', detalhe: 'Tipo' },
      { rotulo: 'Resp. com filtro', detalhe: 'Tipo' },
      { rotulo: 'Resp. facial completo', detalhe: 'Tipo' },
    ],
  },
  {
    titulo: 'BRAÇOS E MÃOS',
    itens: [
      { rotulo: 'Mangote' },
      { rotulo: 'Luvas resistentes a corte', detalhe: 'Modelo/Nome' },
      { rotulo: 'Luvas resistentes a produtos químicos', detalhe: 'Qual? Modelo/Nome' },
      { rotulo: 'Luvas resistentes a alta temperatura', detalhe: 'Modelo/Nome' },
    ],
  },
  {
    titulo: 'TÓRAX',
    itens: [
      { rotulo: 'Colete refletivo' },
      { rotulo: 'Cinto paraquedista' },
      { rotulo: 'Avental de raspa' },
      { rotulo: 'Blusão antichama' },
      { rotulo: 'Colete salva-vidas' },
    ],
  },
  {
    titulo: 'PERNAS E PÉS',
    itens: [
      { rotulo: 'Perneira' },
      { rotulo: 'Sapato de segurança' },
      { rotulo: 'Calça antichama' },
    ],
  },
  {
    titulo: 'CORPO INTEIRO',
    itens: [{ rotulo: 'Vestimenta Tyvek/Tychem' }, { rotulo: 'Vestimenta arco elétrico' }],
  },
  {
    titulo: 'PROTEÇÕES COLETIVAS',
    itens: [
      { rotulo: 'Bastão de aterramento' },
      { rotulo: 'Calços em veículos' },
      { rotulo: 'Guarda-corpos' },
      { rotulo: 'Isolamento de área' },
      { rotulo: 'Linha de vida' },
      { rotulo: 'Pontos de ancoragem' },
      { rotulo: 'Sistema exaustor/ventilação' },
      { rotulo: 'Tapumes' },
      { rotulo: 'Bóia' },
    ],
  },
];

export const MEIO_AMBIENTE: GrupoMeioAmbienteDef[] = [
  {
    titulo: 'UTILIZAÇÃO DE PRODUTOS QUÍMICOS',
    itens: [
      'Checar incompatibilidade de produtos',
      'Sist. de contenção para volumes > 50L',
      'Disponibilizar kit de emergência',
    ],
  },
  {
    titulo: 'EMISSÃO DE MATERIAL PARTICULADO',
    itens: [
      'Providenciar umectação',
      'Instalar tela ou lona de proteção',
      'Comunicar a área responsável sobre o desvio do equipamento',
    ],
  },
  {
    titulo: 'GERAÇÃO DE EFLUENTES',
    itens: [
      'Caracterização do efluente de acordo com legislação aplicável',
      'Direcionar efluente para bacia de contenção e/ou área de tratamento',
      'Providenciar sistema de cont. p/ efluentes',
      'Disponibilizar kit de emergência',
    ],
  },
  {
    titulo: 'GERAÇÃO DE RESÍDUOS',
    itens: ['Segregar por tipo de resíduo', 'Providenciar coletores para armazenagem'],
  },
];

export const RISCOS_LOCAIS: string[] = [
  'Ficar no raio de ação de peças e queda de materiais?',
  'Nos colocar em regiões de prensamento ou agarramento?',
  'Estar expostos a ação da gravidade ou a partes de equipamentos ou peças?',
  'Nos cortar ou perfurar através de ferramentas manuais ou em estruturas?',
  'Cair de plataforma ou de escadas durante o acesso (atenção para os possíveis pontos com corrosão)?',
  'Nos colocar em região de prensamento de dedos ou mãos?',
  'Tropeçar ou escorregar no acesso ou no local de trabalho?',
  'Presença de animais peçonhentos, insetos ou animal selvagem?',
  'Vizinhança local oferece riscos não previstos que inviabilizem ou dificultem as atividades?',
  'Interferência entre equipes (trabalho sobreposto, espaço restrito)?',
  'Nos queimar por exposição ao vapor, condensado ou superfície quente?',
  'Estar exposto a arco e/ou choque elétrico? Estar exposto a campos de radiação ionizante?',
  'Estar exposto a projeção de material quente como sínter, coque, gusa ou aço líquido?',
  'Estar expostos a energias hidráulicas ou pneumáticas?',
  'Estar expostos a gases, vapores, poeiras ou fumos?',
  'Estar expostos produtos químicos ou queimaduras?',
  'Ser feridos na face ou nos olhos por projeção de materiais?',
  'Condições climáticas adversas (sol, chuva, vento)?',
  'Estar em condições de saúde/emocional debilitada?',
  'Queda de homem ao mar ou afogamento?',
];

export const TOTAL_REAVALIACOES = 5;
export const TOTAL_EXECUTANTES = 16;

export const TELEFONES_EMERGENCIA = [
  {
    local: 'Telefone',
    telefone: '(00) 0000-0000',
    tel: '0000000000',
    radio: 'Rádio de emergência',
  },
];
