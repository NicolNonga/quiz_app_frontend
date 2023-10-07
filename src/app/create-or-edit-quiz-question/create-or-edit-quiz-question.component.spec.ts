import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditQuizQuestionComponent } from './create-or-edit-quiz-question.component';

describe('CreateOrEditQuizQuestionComponent', () => {
  let component: CreateOrEditQuizQuestionComponent;
  let fixture: ComponentFixture<CreateOrEditQuizQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrEditQuizQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrEditQuizQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
