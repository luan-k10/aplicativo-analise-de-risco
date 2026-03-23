import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-analise-risco-form-categoria',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './analise-risco-form-categoria.component.html',
  styleUrl: './analise-risco-form-categoria.component.css',
})
export class AnaliseRiscoFormCategoriaComponent { }
