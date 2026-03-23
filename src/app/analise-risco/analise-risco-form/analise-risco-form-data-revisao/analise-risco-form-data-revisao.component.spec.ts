import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseRiscoFormDataRevisaoComponent } from './analise-risco-form-data-revisao.component';

describe('AnaliseRiscoFormDataRevisaoComponent', () => {
  let component: AnaliseRiscoFormDataRevisaoComponent;
  let fixture: ComponentFixture<AnaliseRiscoFormDataRevisaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseRiscoFormDataRevisaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnaliseRiscoFormDataRevisaoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
