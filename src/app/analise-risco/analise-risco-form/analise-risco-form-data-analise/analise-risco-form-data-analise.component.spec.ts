import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseRiscoFormDataAnaliseComponent } from './analise-risco-form-data-analise.component';

describe('AnaliseRiscoFormDataAnaliseComponent', () => {
  let component: AnaliseRiscoFormDataAnaliseComponent;
  let fixture: ComponentFixture<AnaliseRiscoFormDataAnaliseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseRiscoFormDataAnaliseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnaliseRiscoFormDataAnaliseComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
