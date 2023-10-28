import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnswersQuizQuestionComponent } from './add-answers-quiz-question.component';

describe('AddAnswersQuizQuestionComponent', () => {
  let component: AddAnswersQuizQuestionComponent;
  let fixture: ComponentFixture<AddAnswersQuizQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnswersQuizQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnswersQuizQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
