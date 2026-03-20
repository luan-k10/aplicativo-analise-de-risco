import { NavbarComponent } from '../navbar/navbar.component';
import { Component } from '@angular/core';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { AnaliseRiscoCardComponent } from './analise-risco-card/analise-risco-card.component';
import { AutorizarAnaliseRiscoCardComponent } from "./autorizar-analise-risco-card/autorizar-analise-risco-card.component";
import { AddEquipeCardComponent } from "./add-equipe-card/add-equipe-card.component";
import { RecentRiskAnalysesComponent } from "./recent-risk-analyses/recent-risk-analyses.component";
import { CardRiskAnalysesComponent } from './recent-risk-analyses/card-risk-analyses/card-risk-analyses.component';
import { InsightComponent } from './insight/insight.component';
@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent, DashboardHeaderComponent, AnaliseRiscoCardComponent, AutorizarAnaliseRiscoCardComponent,
     AddEquipeCardComponent, RecentRiskAnalysesComponent,
      CardRiskAnalysesComponent, InsightComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class dashboardComponent { }
