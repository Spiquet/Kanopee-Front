import { colors } from './../../pages/connected/components/header-calendar/color';
import { Site } from './site';
import { User } from './user';
import { Workshop } from './workshop';
import { CalendarEvent } from 'angular-calendar';

export class Event {

  public id: number;
  public startAt: Date;
  public endAt: Date;
  public user: User;
  public atelier: Workshop;
  public site: Site;
  public eventType: string;
  public color: any;
  public description: string;

  constructor(input?: Event) {
    if (input != null) {
      Object.assign(this, input);

    }
  }

  convertToCalendarEvent(): CalendarEvent<Event> {
    const calEvent: CalendarEvent<Event> = {
      id: this.id,
      start: new Date(this.startAt),
      end: new Date(this.endAt),
      color: this.color,
      title: this.eventType,
      meta: this,
    };
    return calEvent;
  }
}
