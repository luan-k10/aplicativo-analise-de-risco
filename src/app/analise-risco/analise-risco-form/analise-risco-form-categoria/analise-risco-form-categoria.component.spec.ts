import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseRiscoFormCategoriaComponent } from './analise-risco-form-categoria.component';

describe('AnaliseRiscoFormCategoriaComponent', () => {
  let component: AnaliseRiscoFormCategoriaComponent;
  let fixture: ComponentFixture<AnaliseRiscoFormCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseRiscoFormCategoriaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnaliseRiscoFormCategoriaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
