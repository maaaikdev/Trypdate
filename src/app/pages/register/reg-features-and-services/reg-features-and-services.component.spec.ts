import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegFeaturesAndServicesComponent } from './reg-features-and-services.component';

describe('RegFeaturesAndServicesComponent', () => {
  let component: RegFeaturesAndServicesComponent;
  let fixture: ComponentFixture<RegFeaturesAndServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegFeaturesAndServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegFeaturesAndServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
