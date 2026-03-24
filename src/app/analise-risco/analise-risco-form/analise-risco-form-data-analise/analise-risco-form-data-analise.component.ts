import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@Component({
  selector: 'app-analise-risco-form-data-analise',
  imports: [MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule],
  templateUrl: './analise-risco-form-data-analise.component.html',
  styleUrl: './analise-risco-form-data-analise.component.css',
})
export class AnaliseRiscoFormDataAnaliseComponent {}
