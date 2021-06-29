import { Message } from './../../../../shared/models/message';

import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-questions-details',
    templateUrl: './questions-details.component.html',
    styleUrls: ['./questions-details.component.scss'],
})
export class QuestionsDetailsComponent implements OnInit {
    @Input() question: Message;
    constructor() {}

    ngOnInit() {}
}
