import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseRiscoFormNivelImpactoComponent } from './analise-risco-form-nivel-impacto.component';

describe('AnaliseRiscoFormNivelImpactoComponent', () => {
  let component: AnaliseRiscoFormNivelImpactoComponent;
  let fixture: ComponentFixture<AnaliseRiscoFormNivelImpactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseRiscoFormNivelImpactoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnaliseRiscoFormNivelImpactoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
