import { AnaliseRiscoFormResponsavelEquipeComponent } from './analise-risco-form-responsavel-equipe/analise-risco-form-responsavel-equipe.component';
import { Component, ViewEncapsulation } from '@angular/core';
import { AnaliseRiscoFormCategoriaComponent } from './analise-risco-form-categoria/analise-risco-form-categoria.component';
import { AnaliseRiscoFormNomeRiscoComponent } from './analise-risco-form-nome-risco/analise-risco-form-nome-risco.component';
import { AnaliseRiscoFormLocalAreaComponent } from './analise-risco-form-local-area/analise-risco-form-local-area.component';
import { AnaliseRiscoFormNivelImpactoComponent } from './analise-risco-form-nivel-impacto/analise-risco-form-nivel-impacto.component';
import { AnaliseRiscoFormProbabilidadeComponent } from './analise-risco-form-probabilidade/analise-risco-form-probabilidade.component';
import { AnaliseRiscoFormScoreRiscoComponent } from './analise-risco-form-score-risco/analise-risco-form-score-risco.component';
import {AnaliseRiscoFormDescricaoRiscoComponent} from './analise-risco-form-descricao-risco/analise-risco-form-descricao-risco.component'
import { AnaliseRiscoFormMedidasControleComponent } from './analise-risco-form-medidas-controle/analise-risco-form-medidas-controle.component';
import { AnaliseRiscoFormDataAnaliseComponent } from './analise-risco-form-data-analise/analise-risco-form-data-analise.component';
import { AnaliseRiscoFormDataRevisaoComponent } from './analise-risco-form-data-revisao/analise-risco-form-data-revisao.component';

@Component({
  selector: 'app-analise-risco-form',
  imports: [AnaliseRiscoFormCategoriaComponent, AnaliseRiscoFormNomeRiscoComponent, AnaliseRiscoFormResponsavelEquipeComponent,
    AnaliseRiscoFormLocalAreaComponent, AnaliseRiscoFormNivelImpactoComponent, AnaliseRiscoFormProbabilidadeComponent,
    AnaliseRiscoFormNomeRiscoComponent, AnaliseRiscoFormScoreRiscoComponent, AnaliseRiscoFormDescricaoRiscoComponent,
    AnaliseRiscoFormMedidasControleComponent, AnaliseRiscoFormDataAnaliseComponent, AnaliseRiscoFormDataRevisaoComponent],
  templateUrl: './analise-risco-form.component.html',
  styleUrl: './analise-risco-form.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AnaliseRiscoFormComponent { }
