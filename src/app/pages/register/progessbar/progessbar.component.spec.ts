import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProgessbarComponent } from './progessbar.component';

describe('ProgessbarComponent', () => {
  let component: ProgessbarComponent;
  let fixture: ComponentFixture<ProgessbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgessbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgessbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
