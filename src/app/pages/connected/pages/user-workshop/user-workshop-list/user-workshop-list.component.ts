import { UserService } from './../../../../../shared/services/user.service';
import { User } from './../../../../../shared/models/user';
import { Site } from './../../../../../shared/models/site';
import { Event } from './../../../../../shared/models/event';
import { EventService } from './../../../../../shared/services/event.service';
import { Component, OnInit, Input } from '@angular/core';
import { Workshop } from '../../../../../shared/models/workshop';
import { PageEvent } from '@angular/material/paginator';

@Component({
    selector: 'app-user-workshop-list',
    templateUrl: './user-workshop-list.component.html',
    styleUrls: ['./user-workshop-list.component.scss'],
})
export class UserWorkshopListComponent implements OnInit {
    @Input() user: User;
    @Input() workshop: Workshop;
    @Input() site: Site;
    @Input() events: Event[];

    paginatorArray: Event[];
    startPageEvent: PageEvent = {
        length: 0,
        pageIndex: 0,
        pageSize: 10,
    };

    constructor(private eventService: EventService, private userService: UserService) {}

    ngOnInit() {
        this.user = this.userService.user;
        console.log(this.user);
        this.eventService.getEventByWorkshop().subscribe((workEvent) => {
            this.events = workEvent;
            this.startPageEvent.length = this.events.length;
            this.generatePaginatorArray(this.startPageEvent);
        });
    }

    generatePaginatorArray(event: PageEvent) {
        this.paginatorArray = [];
        const start = event.pageSize * event.pageIndex;
        const end = start + event.pageSize;
        for (let i = start; i < end; i++) {
            if (this.events[i]) {
                this.paginatorArray.push(this.events[i]);
            } else {
                break;
            }
        }
    }
}
