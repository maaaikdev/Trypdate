import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegAvailabilityComponent } from './reg-availability.component';

describe('RegAvailabilityComponent', () => {
  let component: RegAvailabilityComponent;
  let fixture: ComponentFixture<RegAvailabilityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
