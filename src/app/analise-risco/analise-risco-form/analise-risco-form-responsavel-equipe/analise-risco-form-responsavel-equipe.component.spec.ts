import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseRiscoFormResponsavelEquipeComponent } from './analise-risco-form-responsavel-equipe.component';

describe('AnaliseRiscoFormResponsavelEquipeComponent', () => {
  let component: AnaliseRiscoFormResponsavelEquipeComponent;
  let fixture: ComponentFixture<AnaliseRiscoFormResponsavelEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseRiscoFormResponsavelEquipeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnaliseRiscoFormResponsavelEquipeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
