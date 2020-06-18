import { environment } from './../../../environments/environment';
import { Event } from '../models/event';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }
  static URL = environment.urlServer + 'events';

  public getAll(): Observable<Event[]> {
    return this.http
      .get(EventService.URL)
      .pipe(map(this.convertDataFromServerToEvents));
  }

  public getAllEventByKulteur(id: number): Observable<Event[]> {
    return this.http
      .get(EventService.URL + '/kulteur/' + id)
      .pipe(map(this.convertDataFromServerToEvents));
  }

  public getAllEventBysite(id: number): Observable<Event[]> {
    return this.http
      .get(EventService.URL + '/site/' + id)
      .pipe(map(this.convertDataFromServerToEvents));

  }

  public getEventByWorkshop(): Observable<Event[]> {
    return this.http
      .get(EventService.URL + '/workshops')
      .pipe(map(this.convertDataFromServerToEvents));
  }

  private convertDataFromServerToEvents(events: any[]): Event[] {
    return events.map(event => {
      return new Event(event);
    });
  }

  public getById(id: number): Observable<Event> {
    return this.http
      .get(EventService.URL + '/' + id)
      .pipe(map((event: Event) => new Event(event)));
  }

  public postEvent(event: Event): Observable<any> {
    return this.http
      .post(EventService.URL, event);
  }

  public putEvent(id: number, event: Event): Observable<any> {
    return this.http
      .put(EventService.URL + '/' + event.id, event);
  }

  public delete(id: number): Observable<any> {
    return this.http
      .delete(EventService.URL + '/' + id);
  }
}
