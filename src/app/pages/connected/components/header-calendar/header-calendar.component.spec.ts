import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCalendarComponent } from './header-calendar.component';

describe('HeaderCalendarComponent', () => {
  let component: HeaderCalendarComponent;
  let fixture: ComponentFixture<HeaderCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
