import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarConnectComponent } from './navbar-connect.component';

describe('NavbarConnectComponent', () => {
  let component: NavbarConnectComponent;
  let fixture: ComponentFixture<NavbarConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
