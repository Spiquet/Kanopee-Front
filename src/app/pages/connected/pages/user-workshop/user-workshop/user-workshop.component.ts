import { Site } from './../../../../../shared/models/site';
import { Workshop } from './../../../../../shared/models/workshop';
import { Event } from './../../../../../shared/models/event';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-workshop',
  templateUrl: './user-workshop.component.html',
  styleUrls: ['./user-workshop.component.scss']
})
export class UserWorkshopComponent implements OnInit {
  @Input() workshop: Workshop;
  @Input() event: Event;
  @Input() site: Site;

  constructor() { }

  ngOnInit() { }

  register() { }
}
