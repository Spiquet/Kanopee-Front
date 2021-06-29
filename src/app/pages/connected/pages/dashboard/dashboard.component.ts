import { Product } from './../../../../shared/models/product';
import { ProductService } from './../../../../shared/services/product.service';
import { EventService } from './../../../../shared/services/event.service';
import { Site } from './../../../../shared/models/site';
import { Event } from './../../../../shared/models/event';
import { Workshop } from './../../../../shared/models/workshop';
import { UserService } from './../../../../shared/services/user.service';
import { User } from './../../../../shared/models/user';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    @Input() user: User;
    @Input() workshop: Workshop;
    @Input() events: Event[];
    @Input() site: Site;
    @Input() event: Event;

    constructor(private userService: UserService, private eventService: EventService, private router: Router) {}

    ngOnInit() {
        this.user = this.userService.user;
        this.getEvents();
    }

    getEvents() {
        this.eventService.getEventByWorkshop().subscribe((workEvent) => {
            this.events = workEvent;
        });
    }

    redirectToProducts() {
        this.router.navigateByUrl('/log/produits');
    }
}
