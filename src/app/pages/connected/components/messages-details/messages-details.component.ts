import { Message } from '../../../../shared/models/message';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-messages-details',
    templateUrl: './messages-details.component.html',
    styleUrls: ['./messages-details.component.scss'],
})
export class MessagesDetailsComponent {
    @Input() message: Message;
}
