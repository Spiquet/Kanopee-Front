import { UserService } from './../../../../shared/services/user.service';
import { User } from 'src/app/shared/models/user';
import { Message } from './../../../../shared/models/message';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../../shared/services/message.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-community',
    templateUrl: './community.component.html',
    styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
    messages: Message[];
    newMessage: Message = new Message();
    user: User;

    constructor(private messageService: MessageService, private userService: UserService, private fb: FormBuilder) {}

    messageForm = this.fb.group({
        content: ['', Validators.required],
    });

    ngOnInit(): void {
        this.user = this.userService.user;
        this.messageService.getAllMessages().subscribe((messages) => {
            this.messages = messages;
        });
    }

    onSubmit() {
        this.newMessage.content = this.messageForm.get('content').value;
        this.newMessage.role = 'message';
        this.newMessage.site = this.user.site;
        this.messageService.create(this.newMessage).subscribe(() => {
            this.messageService.getAllMessages().subscribe((messages) => {
                this.messages = messages;
            });
        });
        this.messageForm.markAsUntouched();
        this.messageForm.reset();
    }
}
