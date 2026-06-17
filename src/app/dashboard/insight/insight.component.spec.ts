import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightComponent } from './insight.component';

describe('InsighComponent', () => {
  let component: InsightComponent;
  let fixture: ComponentFixture<InsightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsightComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InsightComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
