import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseRiscoFormNomeRiscoComponent } from './analise-risco-form-nome-risco.component';

describe('AnaliseRiscoFormNomeRiscoComponent', () => {
  let component: AnaliseRiscoFormNomeRiscoComponent;
  let fixture: ComponentFixture<AnaliseRiscoFormNomeRiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseRiscoFormNomeRiscoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnaliseRiscoFormNomeRiscoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
