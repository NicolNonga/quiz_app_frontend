import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionDescriptionComponent } from './quiz-question-description.component';

describe('QuizQuestionDescriptionComponent', () => {
  let component: QuizQuestionDescriptionComponent;
  let fixture: ComponentFixture<QuizQuestionDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizQuestionDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizQuestionDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
