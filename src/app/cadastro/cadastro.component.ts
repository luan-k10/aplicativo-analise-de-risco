import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-cadastro',
  imports: [RouterModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  iconName: string = 'visibility_off';
  typename: string = 'password';

  toggleIcon() {
    this.iconName = this.iconName === 'visibility' ? 'visibility_off' : 'visibility';
    this.typename = this.typename === 'password' ? 'text' : 'password';
  }
}
