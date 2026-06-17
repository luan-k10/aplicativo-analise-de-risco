import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRiskAnalysesComponent } from './card-risk-analyses.component';

describe('CardRiskAnalysesComponent', () => {
  let component: CardRiskAnalysesComponent;
  let fixture: ComponentFixture<CardRiskAnalysesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardRiskAnalysesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardRiskAnalysesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
