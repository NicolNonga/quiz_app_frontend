import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderBarComponent } from './siderbar.component';

describe('SiderBarComponent', () => {
  let component: SiderBarComponent;
  let fixture: ComponentFixture<SiderBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiderBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
