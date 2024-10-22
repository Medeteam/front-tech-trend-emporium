import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateEmployeeService } from '../../services/create-employee.service';
import { CreateEmployeeFormComponent } from './create-employee-form.component';

describe('CreateProductFormComponent', () => {
  let component: CreateEmployeeService;
  let fixture: ComponentFixture<CreateEmployeeService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEmployeeFormComponent]
    })
    .compileComponents();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
