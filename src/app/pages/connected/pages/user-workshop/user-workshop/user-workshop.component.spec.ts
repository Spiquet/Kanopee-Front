import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkshopComponent } from './user-workshop.component';

describe('UserWorkshopComponent', () => {
  let component: UserWorkshopComponent;
  let fixture: ComponentFixture<UserWorkshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWorkshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
