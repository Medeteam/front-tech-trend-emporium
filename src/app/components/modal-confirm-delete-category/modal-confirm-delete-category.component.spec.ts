import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmDeleteCategoryComponent } from './modal-confirm-delete-category.component';

describe('ModalConfirmDeleteCategoryComponent', () => {
  let component: ModalConfirmDeleteCategoryComponent;
  let fixture: ComponentFixture<ModalConfirmDeleteCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalConfirmDeleteCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalConfirmDeleteCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
