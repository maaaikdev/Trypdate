import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegExperiencesComponent } from './reg-experiences.component';

describe('RegExperiencesComponent', () => {
  let component: RegExperiencesComponent;
  let fixture: ComponentFixture<RegExperiencesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegExperiencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
