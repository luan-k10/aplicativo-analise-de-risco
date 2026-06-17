import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseRiscoFormComponent } from './analise-risco-form.component';

describe('AnaliseRiscoFormComponent', () => {
  let component: AnaliseRiscoFormComponent;
  let fixture: ComponentFixture<AnaliseRiscoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseRiscoFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnaliseRiscoFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
