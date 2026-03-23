import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseRiscoFormMedidasControleComponent } from './analise-risco-form-medidas-controle.component';

describe('AnaliseRiscoFormMedidasControleComponent', () => {
  let component: AnaliseRiscoFormMedidasControleComponent;
  let fixture: ComponentFixture<AnaliseRiscoFormMedidasControleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseRiscoFormMedidasControleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnaliseRiscoFormMedidasControleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
