import { Component } from '@angular/core';
import { CardRiskAnalysesComponent } from "./card-risk-analyses/card-risk-analyses.component";

@Component({
  selector: 'app-recent-risk-analyses',
  imports: [CardRiskAnalysesComponent],
  templateUrl: './recent-risk-analyses.component.html',
  styleUrl: './recent-risk-analyses.component.css',
})
export class RecentRiskAnalysesComponent {
    expandido = false;

toggleExpand() {
  this.expandido = !this.expandido;
}
}
