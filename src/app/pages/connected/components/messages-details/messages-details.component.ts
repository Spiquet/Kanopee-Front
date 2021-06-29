import { Message } from '../../../../shared/models/message';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-messages-details',
    templateUrl: './messages-details.component.html',
    styleUrls: ['./messages-details.component.scss'],
})
export class MessagesDetailsComponent implements OnInit {
    @Input() message: Message;
    constructor() {}

    ngOnInit() {}
}
