import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardQuizQuestionComponent } from './card-quiz-question.component';

describe('CardQuizQuestionComponent', () => {
  let component: CardQuizQuestionComponent;
  let fixture: ComponentFixture<CardQuizQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardQuizQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardQuizQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
