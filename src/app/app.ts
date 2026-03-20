import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { dashboardComponent} from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, dashboardComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

}
