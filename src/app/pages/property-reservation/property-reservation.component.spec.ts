import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyReservationComponent } from './property-reservation.component';

describe('PropertyReservationComponent', () => {
  let component: PropertyReservationComponent;
  let fixture: ComponentFixture<PropertyReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
