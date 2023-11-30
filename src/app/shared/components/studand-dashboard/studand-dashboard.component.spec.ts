import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudandDashboardComponent } from './studand-dashboard.component';

describe('StudandDashboardComponent', () => {
  let component: StudandDashboardComponent;
  let fixture: ComponentFixture<StudandDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudandDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudandDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
