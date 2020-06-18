import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopFormsComponent } from './workshop-forms.component';

describe('WorkshopFormsComponent', () => {
  let component: WorkshopFormsComponent;
  let fixture: ComponentFixture<WorkshopFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
