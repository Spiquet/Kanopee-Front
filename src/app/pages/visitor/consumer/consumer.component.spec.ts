import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConsumerComponent } from './consumer.component';

describe('ConsumerComponent', () => {
    let component: ConsumerComponent;
    let fixture: ComponentFixture<ConsumerComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ConsumerComponent],
            }).compileComponents();
        }),
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ConsumerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
