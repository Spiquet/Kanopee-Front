import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConceptionComponent } from './conception.component';

describe('ConceptionComponent', () => {
  let component: ConceptionComponent;
  let fixture: ComponentFixture<ConceptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
