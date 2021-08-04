import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegCancellationComponent } from './reg-cancellation.component';

describe('RegCancellationComponent', () => {
  let component: RegCancellationComponent;
  let fixture: ComponentFixture<RegCancellationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegCancellationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegCancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
