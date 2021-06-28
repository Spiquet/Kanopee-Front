import { Injectable, Input, Directive } from '@angular/core';
import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
import { DatePipe } from '@angular/common';


@Directive()
@Injectable()
export class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
  @Input() locale = 'fr';
  constructor() {
    super();
  }


  // you can override any of the methods defined in the parent class
  // This file show the caracteristique of event in event

  week(event: CalendarEvent): string {
    return this.insertText(event);
  }

  day(event: CalendarEvent): string {
    return this.insertText(event);
  }

  insertText(event: CalendarEvent): string {
    if (event.title === 'Atelier') {
      return `<b>Début : ${new DatePipe(this.locale).transform(
        event.start,
        'EEEE d MMMM, hh:mm a',
        this.locale
      )}<br>Type : ${event.title}
      <br>Titre : ${event.meta.atelier.title}
      <br>Kulteur : ${event.meta.user.firstName}
      <br>Lieu de l'évènement : ${event.meta.site.name}
      <br>Durée Atelier : ${event.meta.atelier.duration} minutes<br>Fin : ${new DatePipe(this.locale).transform(
        event.end,
        'EEEE d MMMM, hh:mm a',
        this.locale
      )}</b>`;
    } else {
      return `<b>Début : ${new DatePipe(this.locale).transform(
        event.start,
        'EEEE d MMMM, hh:mm a',
        this.locale
      )}<br>Type : ${event.title}
      <br>Description : ${event.meta.description}
      <br>Kulteur : ${event.meta.user.firstName}
      <br>Lieu de l'évènement : ${event.meta.site.name}
      <br>Fin : ${new DatePipe(this.locale).transform(
        event.end,
        'EEEE d MMMM, hh:mm a',
        this.locale
      )}</b>`;
    }
  }

}
