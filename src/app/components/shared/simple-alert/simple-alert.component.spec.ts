import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAlertComponent } from './simple-alert.component';

describe('SimpleAlertComponent', () => {
  let component: SimpleAlertComponent;
  let fixture: ComponentFixture<SimpleAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleAlertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
