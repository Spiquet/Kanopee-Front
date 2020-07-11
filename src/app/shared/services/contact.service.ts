import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { pipe, Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  static URL = environment.urlServer + 'contact';
  static baseuRL = environment.urlServer;


  constructor(private http: HttpClient) { }

  public postEmail(email: Contact): Observable<any> {
    return this.http
    .post(ContactService.URL + '/email', email);
  }
  }


