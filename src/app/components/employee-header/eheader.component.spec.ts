import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent_1 } from './eheader.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent_1;
  let fixture: ComponentFixture<HeaderComponent_1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent_1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent_1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
