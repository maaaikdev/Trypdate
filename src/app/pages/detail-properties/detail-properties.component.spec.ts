import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetailPropertiesComponent } from './detail-properties.component';

describe('DetailPropertiesComponent', () => {
  let component: DetailPropertiesComponent;
  let fixture: ComponentFixture<DetailPropertiesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
