import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopComponent } from './envelop.component';

describe('EnvelopComponent', () => {
  let component: EnvelopComponent;
  let fixture: ComponentFixture<EnvelopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
