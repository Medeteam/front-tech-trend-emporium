import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoryFormComponent } from './create-category-form.component';

describe('CreateCategoryFormComponent', () => {
  let component: CreateCategoryFormComponent;
  let fixture: ComponentFixture<CreateCategoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCategoryFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
