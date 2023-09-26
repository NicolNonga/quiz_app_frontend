import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditCategoriaComponent } from './create-or-edit-categoria.component';

describe('CreateOrEditCategoriaComponent', () => {
  let component: CreateOrEditCategoriaComponent;
  let fixture: ComponentFixture<CreateOrEditCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrEditCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrEditCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
