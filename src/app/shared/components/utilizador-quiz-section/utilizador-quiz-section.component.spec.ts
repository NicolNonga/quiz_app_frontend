import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizadorQuizSectionComponent } from './utilizador-quiz-section.component';

describe('UtilizadorQuizSectionComponent', () => {
  let component: UtilizadorQuizSectionComponent;
  let fixture: ComponentFixture<UtilizadorQuizSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilizadorQuizSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilizadorQuizSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
