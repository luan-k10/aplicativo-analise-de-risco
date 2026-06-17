import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizarAnaliseRiscoCardComponent } from './autorizar-analise-risco-card.component';

describe('AutorizarAnaliseRiscoCardComponent', () => {
  let component: AutorizarAnaliseRiscoCardComponent;
  let fixture: ComponentFixture<AutorizarAnaliseRiscoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorizarAnaliseRiscoCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AutorizarAnaliseRiscoCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
