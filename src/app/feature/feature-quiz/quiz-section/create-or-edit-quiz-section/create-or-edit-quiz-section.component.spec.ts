import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditQuizSectionComponent } from './create-or-edit-quiz-section.component';

describe('CreateOrEditQuizSectionComponent', () => {
  let component: CreateOrEditQuizSectionComponent;
  let fixture: ComponentFixture<CreateOrEditQuizSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrEditQuizSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrEditQuizSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
