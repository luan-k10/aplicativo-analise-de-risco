import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseRiscoFormScoreRiscoComponent } from './analise-risco-form-score-risco.component';

describe('AnaliseRiscoFormScoreRiscoComponent', () => {
  let component: AnaliseRiscoFormScoreRiscoComponent;
  let fixture: ComponentFixture<AnaliseRiscoFormScoreRiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseRiscoFormScoreRiscoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnaliseRiscoFormScoreRiscoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
