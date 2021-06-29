import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminModerationComponent } from './admin-moderation.component';

describe('AdminModerationComponent', () => {
    let component: AdminModerationComponent;
    let fixture: ComponentFixture<AdminModerationComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [AdminModerationComponent],
            }).compileComponents();
        }),
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminModerationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
