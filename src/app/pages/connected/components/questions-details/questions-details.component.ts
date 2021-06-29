import { Message } from './../../../../shared/models/message';

import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-questions-details',
    templateUrl: './questions-details.component.html',
    styleUrls: ['./questions-details.component.scss'],
})
export class QuestionsDetailsComponent {
    @Input() question: Message;
}
