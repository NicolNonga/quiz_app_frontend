import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditQuizComponent } from './create-or-edit-quiz.component';

describe('CreateOrEditQuizComponent', () => {
  let component: CreateOrEditQuizComponent;
  let fixture: ComponentFixture<CreateOrEditQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrEditQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrEditQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
