import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseRiscoFormDescricaoRiscoComponent } from './analise-risco-form-descricao-risco.component';

describe('AnaliseRiscoFormDescricaoRiscoComponent', () => {
  let component: AnaliseRiscoFormDescricaoRiscoComponent;
  let fixture: ComponentFixture<AnaliseRiscoFormDescricaoRiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseRiscoFormDescricaoRiscoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnaliseRiscoFormDescricaoRiscoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
