import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@Component({
  selector: 'app-analise-risco-form-data-revisao',
   imports: [MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule],
  templateUrl: './analise-risco-form-data-revisao.component.html',
  styleUrl: './analise-risco-form-data-revisao.component.css',
})
export class AnaliseRiscoFormDataRevisaoComponent {}
