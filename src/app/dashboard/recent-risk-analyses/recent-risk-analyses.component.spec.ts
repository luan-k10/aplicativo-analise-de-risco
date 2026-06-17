import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentRiskAnalysesComponent } from './recent-risk-analyses.component';

describe('RecentRiskAnalysesComponent', () => {
  let component: RecentRiskAnalysesComponent;
  let fixture: ComponentFixture<RecentRiskAnalysesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentRiskAnalysesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecentRiskAnalysesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
