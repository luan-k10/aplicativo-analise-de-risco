import { NavbarComponent } from '../navbar/navbar.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent { }
