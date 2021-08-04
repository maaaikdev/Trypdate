import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegConfigPriceComponent } from './reg-config-price.component';

describe('RegConfigPriceComponent', () => {
  let component: RegConfigPriceComponent;
  let fixture: ComponentFixture<RegConfigPriceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegConfigPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegConfigPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
