import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPropertyDetails1Component } from './reg-property-details1.component';

describe('RegPropertyDetails1Component', () => {
  let component: RegPropertyDetails1Component;
  let fixture: ComponentFixture<RegPropertyDetails1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegPropertyDetails1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPropertyDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
