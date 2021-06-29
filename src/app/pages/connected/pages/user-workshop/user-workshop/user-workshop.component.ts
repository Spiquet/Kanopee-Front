import { Site } from './../../../../../shared/models/site';
import { Workshop } from './../../../../../shared/models/workshop';
import { Event } from './../../../../../shared/models/event';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-user-workshop',
    templateUrl: './user-workshop.component.html',
    styleUrls: ['./user-workshop.component.scss'],
})
export class UserWorkshopComponent {
    @Input() workshop: Workshop;
    @Input() event: Event;
    @Input() site: Site;
}
