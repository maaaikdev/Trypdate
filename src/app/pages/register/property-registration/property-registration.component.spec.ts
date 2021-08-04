import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PropertyRegistrationComponent } from './property-registration.component';

describe('PropertyRegistrationComponent', () => {
  let component: PropertyRegistrationComponent;
  let fixture: ComponentFixture<PropertyRegistrationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
