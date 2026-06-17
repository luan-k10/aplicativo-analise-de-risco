import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseRiscoHeaderNavComponent } from './analise-risco-header-nav.component';

describe('AnaliseRiscoHeaderNavComponent', () => {
  let component: AnaliseRiscoHeaderNavComponent;
  let fixture: ComponentFixture<AnaliseRiscoHeaderNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseRiscoHeaderNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnaliseRiscoHeaderNavComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
