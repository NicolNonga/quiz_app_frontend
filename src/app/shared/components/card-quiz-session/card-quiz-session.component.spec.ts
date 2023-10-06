import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardQuizSessionComponent } from './card-quiz-session.component';

describe('CardQuizSessionComponent', () => {
  let component: CardQuizSessionComponent;
  let fixture: ComponentFixture<CardQuizSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardQuizSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardQuizSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
