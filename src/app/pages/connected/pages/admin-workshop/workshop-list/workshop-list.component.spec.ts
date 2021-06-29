import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorkshopListComponent } from './workshop-list.component';

describe('WorkshopListComponent', () => {
    let component: WorkshopListComponent;
    let fixture: ComponentFixture<WorkshopListComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [WorkshopListComponent],
            }).compileComponents();
        }),
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(WorkshopListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
