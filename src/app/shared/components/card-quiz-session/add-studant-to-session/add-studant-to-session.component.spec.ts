import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudantToSessionComponent } from './add-studant-to-session.component';

describe('AddStudantToSessionComponent', () => {
  let component: AddStudantToSessionComponent;
  let fixture: ComponentFixture<AddStudantToSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudantToSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudantToSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
