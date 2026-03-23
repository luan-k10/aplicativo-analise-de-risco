import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseRiscoFormLocalAreaComponent } from './analise-risco-form-local-area.component';

describe('AnaliseRiscoFormLocalAreaComponent', () => {
  let component: AnaliseRiscoFormLocalAreaComponent;
  let fixture: ComponentFixture<AnaliseRiscoFormLocalAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseRiscoFormLocalAreaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnaliseRiscoFormLocalAreaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
