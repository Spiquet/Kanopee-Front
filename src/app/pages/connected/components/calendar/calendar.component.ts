import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild, NgZone, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
    CalendarDateFormatter,
    CalendarEvent,
    CalendarEventTitleFormatter,
    CalendarView,
    DAYS_OF_WEEK,
} from 'angular-calendar';
import { endOfDay, isSameDay, isSameMonth, isSameWeek, startOfDay } from 'date-fns';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Event } from './../../../../shared/models/event';
import { Site } from './../../../../shared/models/site';
import { User } from './../../../../shared/models/user';
import { Workshop } from './../../../../shared/models/workshop';
import { EventService } from './../../../../shared/services/event.service';
import { SiteService } from './../../../../shared/services/site.service';
import { UserService } from './../../../../shared/services/user.service';
import { WorkshopService } from './../../../../shared/services/workshop.service';
import { colors } from './../header-calendar/color';
import { CustomDateFormatter } from './custom-date-formatter.provider';
import { CustomEventTitleFormatter } from './custom-event-title-formatter.provider';
import { MatFormFieldDefaultOptions, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { PageEvent } from '@angular/material/paginator';

@Component({
    selector: 'app-calendar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    providers: [
        {
            provide: CalendarDateFormatter,
            useClass: CustomDateFormatter,
        },
        {
            provide: CalendarEventTitleFormatter,
            useClass: CustomEventTitleFormatter,
        },
    ],
})
export class CalendarComponent implements OnInit {
    constructor(
        private modal: NgbModal,
        private eventService: EventService,
        private atelierService: WorkshopService,
        private userService: UserService,
        private siteService: SiteService,
    ) {}

    @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
    @Input() user: User;

    view: CalendarView;

    CalendarView = CalendarView;

    locale = 'fr';

    tableTitle = ['Atelier', 'Culture-entretien', 'Distribution'];

    excludeDays: number[] = [0];

    weekStartsOn = DAYS_OF_WEEK.SUNDAY;

    viewDate: Date = new Date();
    modalData: {
        action: string;
        event: CalendarEvent;
    };

    refresh: Subject<any> = new Subject();

    activeDayIsOpen = true;
    popupEvent = false;
    popupAddDescription = false;
    checked = false;

    eventsAsync: Observable<CalendarEvent<Event>[]>;

    atelier: Workshop[];

    eventModify;

    eventCal;

    allKulteur: User[];
    allSite: Site[];

    selectedKulteur: number;
    selectedAtelier: string;
    selectedsite: number;
    selectedEvent: CalendarEvent;
    description: string;

    calendarEvents: CalendarEvent<Event>[];

    ngOnInit() {
        if (this.user.role === 'kulteur') {
            this.refreshWithGoodKulteur(this.user.id);
        }

        if (this.user.role === 'admin') {
            this.userService.getKulteur().subscribe((userKulteur) => {
                console.log(userKulteur);
                return (this.allKulteur = userKulteur);
            });

            this.siteService.getAll().subscribe((site) => {
                console.log(site);
                return (this.allSite = site);
            });

            this.atelierService.getAll().subscribe((atelier) => {
                console.log(atelier);
                return (this.atelier = atelier);
            });
        }

        if (window.screen.width > 375) {
            this.view = CalendarView.Week;
        } else {
            this.view = CalendarView.Day;
        }
    }

    /*----------------------------------METHOD FOR THE CALENDAR------------------------------------------------*/

    /* ------- Method which calls all the events which are attributed to the kulteur --------------- */

    refreshWithGoodKulteur(id: number) {
        this.eventService.getAllEventByKulteur(id).subscribe((eventAtelier: Event[]) => {
            for (const event of eventAtelier) {
                if (event.eventType === 'Atelier') {
                    event.color = colors.atelier;
                } else if (event.eventType === 'Culture-entretien') {
                    event.color = colors.culture;
                } else {
                    event.color = colors.distribution;
                }
            }
            this.calendarEvents = [...eventAtelier.map((aEvent) => aEvent.convertToCalendarEvent())];
            this.refresh.next();
        });
    }

    /* ----------------- Method which calls all the events which are attributed to the Site --------------- */

    refreshWithGoodSite(id: number) {
        this.eventService.getAllEventBysite(id).subscribe((eventAtelier: Event[]) => {
            for (const event of eventAtelier) {
                if (event.eventType === 'Atelier') {
                    event.color = colors.atelier;
                } else if (event.eventType === 'Culture-entretien') {
                    event.color = colors.culture;
                } else {
                    event.color = colors.distribution;
                }
            }
            this.calendarEvents = [...eventAtelier.map((aEvent) => aEvent.convertToCalendarEvent())];
            this.refresh.next();
        });
    }

    /* ----------------- When there a click on a day it's method is call ----------------------------------------- */

    dayHeaderClicked(evn) {
        this.viewDate = evn.day.date; // finally get the clicked date value
        this.dayHeaderClicked2(evn.day);
    }

    dayHeaderClicked2({ date, events }: { date: Date; events: CalendarEvent[] }): void {
        if (isSameMonth(date, this.viewDate)) {
            console.log(this.viewDate);
            if (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) {
                /* au click sur une case j'éxécute*/
                this.popupCreateEvent();
            } else {
                this.popupCreateEvent();
            }
            this.viewDate = date;
        }
    }

    /* ------ Close the day open, it's complement of the logique of open popup creation event ----------------- */

    closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
    }

    /* -------------------------- Action for the modal when you click on a event ---------------------------------- */

    handleEvent(action: string, event: CalendarEvent): void {
        this.modalData = { event, action };
        this.modal.open(this.modalContent, { size: 'lg' });
    }

    /* ------------------------ Open the popup of creation Event------------------------------------------ */
    popupCreateEvent() {
        this.activeDayIsOpen = !this.activeDayIsOpen;
        this.popupEvent = !this.popupEvent;
    }

    /* ----------------------- Method that set a new view in the calendar, use for the responsive -------------------------------- */

    setView(view: CalendarView) {
        this.view = view;
    }

    /*----------------------------------METHOD FOR POPUP CREATION EVENT------------------------------------------------*/

    /* ------------------------ Open the popup of add Description------------------------------------------ */

    openPopupDesciption(event) {
        this.selectedEvent = event;
        this.popupAddDescription = !this.popupAddDescription;
    }

    /* -------- When there a click on the buttton "Ajouter Evènement" it's method is call -------------------- */
    /* -------- After the method, the method "refreshWithGoodKulteur" is call -------------------------------- */
    addEvent(): void {
        this.eventCal = {
            title: this.tableTitle[0],
            startAt: startOfDay(new Date()),
            endAt: endOfDay(new Date()),
            user: this.selectedKulteur,
            color: 'red',
            atelier: this.atelier[0],
            site: this.allSite[0],
        };
        this.eventService.postEvent(this.eventCal).subscribe(() => {
            this.refreshWithGoodKulteur(this.selectedKulteur);
        });
    }

    /* ----------------------- Method that delete one event -------------------------------- */

    deleteEvent(idEventToDelete) {
        this.eventService.delete(idEventToDelete).subscribe((data) => {
            this.refreshWithGoodKulteur(this.selectedKulteur);
        });
    }

    /* -------- When there a click on the buttton "Ajouter Evènement" it's method is call -------------------- */

    addDescriptionEvent(description) {
        this.eventModify = this.selectedEvent.meta;
        this.eventModify.color = 'red';
        this.eventModify.description = description;
        this.eventService.putEvent(this.eventModify.id, this.eventModify).subscribe(() => {
            console.log('valid');
            this.refreshWithGoodKulteur(this.selectedKulteur);
        });
        this.popupAddDescription = !this.popupAddDescription;
    }

    /* -------- When there a click on the buttton select choice the task it's method is call -------------------- */
    /*-------------It's method modify the task for event selected in the data base -------------------------- */

    addTypeAtEvent(idEvent, event, type: string) {
        console.log(idEvent);
        console.log(type);
        if (type != null) {
            if (type !== 'Atelier') {
                this.eventModify = event.meta;
                this.eventModify.eventType = type;
                this.eventModify.atelier = null;
                this.eventModify.color = 'red';
                console.log(this.eventModify);
                this.eventService.putEvent(idEvent, this.eventModify).subscribe(() => {
                    console.log('valid');
                    this.refreshWithGoodKulteur(this.selectedKulteur);
                });
            } else {
                this.eventModify = event.meta;
                this.eventModify.eventType = type;
                this.eventModify.description = 'Aucune description';
                this.eventModify.atelier = this.atelier[0];
                this.eventModify.color = 'red';
                console.log(this.eventModify);
                this.eventService.putEvent(idEvent, this.eventModify).subscribe(() => {
                    console.log('valid');
                    this.refreshWithGoodKulteur(this.selectedKulteur);
                });
            }
        }
    }

    /*--- When there a click on the buttton select choice the workshop if the task is "Atelier", it's method is call ---*/
    /*-------------It's method modify the workshop for event selected in the data base --------------------------- */

    addAtelierAtEvent(idEvent, event, atelier: Workshop) {
        if (event != null) {
            this.eventModify = event.meta;
            this.eventModify.atelier = atelier;
            this.eventModify.color = 'red';
            console.log(this.eventModify);
            this.eventService.putEvent(idEvent, this.eventModify).subscribe(() => {
                console.log('valid');
            });
        }
    }

    /*------------------- When there a click on the buttton select choice the site, it's method is call ----------------*/
    /*---------------------It's method modify in the data base the site for the event selected ------------------ */

    addSiteAtEvent(idEvent, event, site: Site) {
        console.log(idEvent);
        console.log(event);
        if (event != null) {
            this.eventModify = event.meta;
            this.eventModify.site = site;
            this.eventModify.color = 'red';
            console.log(this.eventModify);
            this.eventService.putEvent(idEvent, this.eventModify).subscribe(() => {
                console.log('valid');
            });
        }
    }

    /*--------------------- When the date of start or end is change, it's method is call ------------------------------*/
    /*-------------It's method modify in the data base the date of start and end of event selected --------------- */
    /*-----It's method add 10 min at the date of start if se date start and the date end this the same ------ */

    modifyEventStart(idEvent, event) {
        console.log(event);
        if (event != null) {
            this.eventModify = event.meta;
            this.eventModify.startAt = new Date(event.start.toISOString());
            this.eventModify.endAt = new Date(event.end.toISOString());
            if (this.eventModify.startAt === this.eventModify.endAt) {
                const addMinutes = new Date(event.end.setMinutes(event.end.getMinutes() + 10));
                this.eventModify.endAt = new Date(addMinutes.toISOString());
            }
            this.eventModify.color = 'red';
            this.eventModify.eventType = event.title;
            console.log(this.eventModify);
            this.eventService.putEvent(idEvent, this.eventModify).subscribe(() => {
                console.log('valid');
                this.refreshWithGoodKulteur(this.selectedKulteur);
                this.checked = !this.checked;
            });
        }
    }
}
