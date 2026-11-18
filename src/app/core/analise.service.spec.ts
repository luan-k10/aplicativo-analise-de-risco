import { TestBed } from '@angular/core/testing';
import { AnaliseService } from './analise.service';
import { AnaliseRisco, criarAnaliseVazia, validarAnalise } from './analise.model';

function analiseValida(): AnaliseRisco {
  const a = criarAnaliseVazia();
  a.cabecalho = {
    ...a.cabecalho,
    empresa: 'ArcelorMittal',
    servico: 'Troca de rolo',
    local: 'Laminação',
  };
  a.responsavelExecucao = { nome: 'André', matricula: '70144257' };
  a.executantes[0] = { nome: 'João', matricula: '70144157', ciente: 'S' };
  return a;
}

describe('AnaliseService', () => {
  let service: AnaliseService;
  const avaliador = { nome: 'Gestor', email: 'g@e.com', matricula: '1' };

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnaliseService);
  });

  it('gera código no formato 0000-000', () => {
    for (let i = 0; i < 50; i++) {
      expect(service.gerarCodigo()).toMatch(/^\d{4}-\d{3}$/);
    }
  });

  it('salva como pendente, busca e atualiza o status', () => {
    const salva = service.criar(analiseValida(), avaliador);

    expect(salva.status).toBe('pendente');
    expect(service.obter(salva.codigo)).toBeTruthy();
    expect(service.buscar('andré').map((a) => a.codigo)).toEqual([salva.codigo]);
    expect(service.buscar('nao-existe')).toEqual([]);

    service.atualizarStatus(salva.codigo, 'aprovada', avaliador);
    expect(service.obter(salva.codigo)?.status).toBe('aprovada');
    expect(JSON.parse(localStorage.getItem('ar.analises')!)[0].status).toBe('aprovada');
  });
});

describe('validarAnalise', () => {
  it('aceita uma análise completa', () => {
    expect(validarAnalise(analiseValida())).toEqual([]);
  });

  it('exige ação para riscos marcados como S e ao menos um executante', () => {
    const a = analiseValida();
    a.riscos[0].resposta = 'S';
    a.executantes[0].nome = '';
    const erros = validarAnalise(a);
    expect(erros.some((e) => e.includes('seção 9'))).toBe(true);
    expect(erros.some((e) => e.includes('seção 10'))).toBe(true);
  });
});
