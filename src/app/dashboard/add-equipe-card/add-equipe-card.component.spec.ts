import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquipeCardComponent } from './add-equipe-card.component';

describe('AddEquipeCardComponent', () => {
  let component: AddEquipeCardComponent;
  let fixture: ComponentFixture<AddEquipeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEquipeCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEquipeCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
