import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserWorkshopComponent } from './user-workshop.component';

describe('UserWorkshopComponent', () => {
    let component: UserWorkshopComponent;
    let fixture: ComponentFixture<UserWorkshopComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [UserWorkshopComponent],
            }).compileComponents();
        }),
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(UserWorkshopComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
