import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroComponent } from "./cadastro.component/cadastro.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CadastroComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

}
