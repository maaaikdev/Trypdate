import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPropertyDetails2Component } from './reg-property-details2.component';

describe('RegPropertyDetails2Component', () => {
  let component: RegPropertyDetails2Component;
  let fixture: ComponentFixture<RegPropertyDetails2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegPropertyDetails2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPropertyDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
