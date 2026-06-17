import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseRiscoFormProbabilidadeComponent } from './analise-risco-form-probabilidade.component';

describe('AnaliseRiscoFormProbabilidadeComponent', () => {
  let component: AnaliseRiscoFormProbabilidadeComponent;
  let fixture: ComponentFixture<AnaliseRiscoFormProbabilidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseRiscoFormProbabilidadeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnaliseRiscoFormProbabilidadeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
