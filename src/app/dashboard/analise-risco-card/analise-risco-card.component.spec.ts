import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseRiscoCardComponent } from './analise-risco-card.component';

describe('AnaliseRiscoCardComponent', () => {
  let component: AnaliseRiscoCardComponent;
  let fixture: ComponentFixture<AnaliseRiscoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseRiscoCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnaliseRiscoCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
