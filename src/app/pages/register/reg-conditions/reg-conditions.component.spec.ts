import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegConditionsComponent } from './reg-conditions.component';

describe('RegConditionsComponent', () => {
  let component: RegConditionsComponent;
  let fixture: ComponentFixture<RegConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
