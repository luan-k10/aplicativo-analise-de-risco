import { AnaliseRiscoFormComponent } from './analise-risco-form/analise-risco-form.component';
import { Component } from '@angular/core';
import { AnaliseRiscoHeaderComponent } from './analise-risco-header/analise-risco-header.component';
import { AnaliseRiscoHeaderNavComponent} from './analise-risco-nav/analise-risco-header-nav.component'
import { AnaliseRiscoFormProbabilidadeComponent } from "./analise-risco-form/analise-risco-form-probabilidade/analise-risco-form-probabilidade.component";

@Component({
  selector: 'app-analise-risco',
  imports: [AnaliseRiscoHeaderComponent, AnaliseRiscoHeaderNavComponent, AnaliseRiscoFormComponent, AnaliseRiscoFormProbabilidadeComponent],
  templateUrl: './analise-risco.component.html',
  styleUrl: './analise-risco.component.css',
})
export class AnaliseRiscoComponent {}
