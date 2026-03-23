import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { dashboardComponent} from './dashboard/dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AnaliseRiscoComponent } from './analise-risco/analise-risco.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, dashboardComponent, AnaliseRiscoComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

}
