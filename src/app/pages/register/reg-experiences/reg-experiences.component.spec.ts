import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegExperiencesComponent } from './reg-experiences.component';

describe('RegExperiencesComponent', () => {
  let component: RegExperiencesComponent;
  let fixture: ComponentFixture<RegExperiencesComponent>;

  beforeEach(async(() => {
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
