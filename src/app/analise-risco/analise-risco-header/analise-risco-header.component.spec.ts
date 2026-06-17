import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseRiscoHeaderComponent } from './analise-risco-header.component';

describe('AnaliseRiscoHeaderComponent', () => {
  let component: AnaliseRiscoHeaderComponent;
  let fixture: ComponentFixture<AnaliseRiscoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseRiscoHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnaliseRiscoHeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
