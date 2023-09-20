import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInternComponent } from './header-intern.component';

describe('HeaderInternComponent', () => {
  let component: HeaderInternComponent;
  let fixture: ComponentFixture<HeaderInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderInternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
