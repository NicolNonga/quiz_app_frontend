import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditQuizOptionComponent } from './create-or-edit-quiz-option.component';

describe('CreateOrEditQuizOptionComponent', () => {
  let component: CreateOrEditQuizOptionComponent;
  let fixture: ComponentFixture<CreateOrEditQuizOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrEditQuizOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrEditQuizOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
