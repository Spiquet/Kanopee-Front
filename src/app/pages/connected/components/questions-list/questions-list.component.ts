import { MessageService } from './../../../../shared/services/message.service';
import { Message } from './../../../../shared/models/message';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-questions-list',
    templateUrl: './questions-list.component.html',
    styleUrls: ['./questions-list.component.scss'],
})
export class QuestionsListComponent implements OnInit {
    questions: Message[];
    question: Message;

    constructor(private messageService: MessageService) {}

    ngOnInit(): void {
        this.messageService.getAllQuestions().subscribe((questions) => {
            this.questions = questions;
        });
    }
}
