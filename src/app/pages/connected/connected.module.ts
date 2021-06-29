import { MatTableModule, MatHeaderRowDef, MatRowDef } from '@angular/material/table';

import { WorkshopFormsComponent } from './pages/admin-workshop/workshop-forms/workshop-forms.component';
import { WorkshopListComponent } from './pages/admin-workshop/workshop-list/workshop-list.component';
import { WorkshopComponent } from './pages/admin-workshop/workshop/workshop.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ConnectedRoutingModule } from './connected-routing.module';
import { NavbarConnectComponent } from './components/navbar-connect/navbar-connect.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { MatMenuModule } from '@angular/material/menu';

import { MatSortModule } from '@angular/material/sort';

import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MessagesListComponent } from './components/messages-list/messages-list.component';
import { MessagesDetailsComponent } from './components/messages-details/messages-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HeaderCalendarComponent } from './components/header-calendar/header-calendar.component';

import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { QuestionsDetailsComponent } from './components/questions-details/questions-details.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import flatpickr from 'flatpickr';
import { French } from 'flatpickr/dist/l10n/fr.js';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PlanningComponent } from './pages/planning/planning.component';
import { EnvelopComponent } from './components/envelop/envelop.component';
import { UserWorkshopComponent } from './pages/user-workshop/user-workshop/user-workshop.component';
import { UserWorkshopListComponent } from './pages/user-workshop/user-workshop-list/user-workshop-list.component';
import { CommunityComponent } from './pages/community/community.component';
import { AdminModerationComponent } from './pages/admin-moderation/admin-moderation.component';
import { ProductComponent } from './pages/product/product.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { UserRolePipe } from './../../shared/pipe/user-role.pipe';

flatpickr.localize(French);

@NgModule({
    declarations: [
        NavbarConnectComponent,
        DashboardComponent,
        MessagesListComponent,
        MessagesDetailsComponent,
        WorkshopComponent,
        WorkshopFormsComponent,
        WorkshopListComponent,
        CalendarComponent,
        HeaderCalendarComponent,
        QuestionsDetailsComponent,
        QuestionsListComponent,
        CalendarComponent,
        HeaderCalendarComponent,
        PlanningComponent,
        EnvelopComponent,
        AdminModerationComponent,
        UserWorkshopComponent,
        UserWorkshopListComponent,
        ProductComponent,
        CommunityComponent,
        UserRolePipe,
        SearchBarComponent,
    ],

    imports: [
        CommonModule,
        MatSelectModule,
        MatPaginatorModule,
        MatTableModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatSortModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatRadioModule,
        MatProgressSpinnerModule,
        ConnectedRoutingModule,
        NgSelectModule,
        NgbModalModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatMenuModule,
        FormsModule,
        FlatpickrModule.forRoot(),
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
    ],

    providers: [
        {
            provide: MatDialogRef,
            useValue: {},
        },
    ],
    bootstrap: [CalendarComponent],
    entryComponents: [WorkshopFormsComponent],
})
export class ConnectedModule {}
