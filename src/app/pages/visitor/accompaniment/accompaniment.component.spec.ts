import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccompanimentComponent } from './accompaniment.component';

describe('AccompanimentComponent', () => {
  let component: AccompanimentComponent;
  let fixture: ComponentFixture<AccompanimentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AccompanimentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccompanimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
