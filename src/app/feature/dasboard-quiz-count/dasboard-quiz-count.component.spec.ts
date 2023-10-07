import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardQuizCountComponent } from './dasboard-quiz-count.component';

describe('DasboardQuizCountComponent', () => {
  let component: DasboardQuizCountComponent;
  let fixture: ComponentFixture<DasboardQuizCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasboardQuizCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardQuizCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
