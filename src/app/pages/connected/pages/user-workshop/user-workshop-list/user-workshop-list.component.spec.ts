import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkshopListComponent } from './user-workshop-list.component';

describe('UserWorkshopListComponent', () => {
  let component: UserWorkshopListComponent;
  let fixture: ComponentFixture<UserWorkshopListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWorkshopListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWorkshopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
