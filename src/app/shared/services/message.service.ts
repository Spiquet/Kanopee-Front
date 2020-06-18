import { environment } from './../../../environments/environment';
import { UserService } from './user.service';
import { Message } from '../models/message';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private http: HttpClient,
    private userService: UserService) { }

  static URL = environment.urlServer + 'discussions';

  public getAllMessages(): Observable<Message[]> {
    return this.http
      .get(MessageService.URL + '/messages')
      .pipe(map(this.convertDataFromServerToMessages));
  }

  public getAllQuestions(): Observable<Message[]> {
    return this.http
      .get(MessageService.URL + '/questions')
      .pipe(map(this.convertDataFromServerToMessages));
  }

  private convertDataFromServerToMessages(messages: any[]): Message[] {
    return messages.map(message => {
      return new Message(message);
    });
  }

  public getById(id: number): Observable<Message> {
    return this.http
      .get(MessageService.URL + '/' + id)
      .pipe(map((message: Message) => new Message(message)));
  }

  public create(message: Message): Observable<any> {
    message.user = this.userService.user;
    return this.http
      .post(MessageService.URL, message);
  }

  public update(message: Message): Observable<any> {
    return this.http
      .put(MessageService.URL + '/' + message.id, message);
  }

  public delete(id: number): Observable<any> {
    return this.http
      .delete(MessageService.URL + '/' + id);
  }

}
