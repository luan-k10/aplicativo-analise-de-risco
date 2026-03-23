import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseRiscoComponent } from './analise-risco.component';

describe('AnaliseRiscoComponent', () => {
  let component: AnaliseRiscoComponent;
  let fixture: ComponentFixture<AnaliseRiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseRiscoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnaliseRiscoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
