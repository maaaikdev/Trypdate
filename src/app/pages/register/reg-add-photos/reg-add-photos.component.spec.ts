import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegAddPhotosComponent } from './reg-add-photos.component';

describe('RegAddPhotosComponent', () => {
  let component: RegAddPhotosComponent;
  let fixture: ComponentFixture<RegAddPhotosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegAddPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegAddPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
