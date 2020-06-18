import { MessageService } from '../../../../shared/services/message.service';
import { Message } from '../../../../shared/models/message';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit {
  messages: Message[] = [];
  message: Message;

  constructor(private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
    this.messageService.getAllMessages().subscribe((messages) => {
      this.messages = messages;
    });
  }

  redirectToCommunity() {
    this.router.navigateByUrl('/log/communaute');
  }

}
