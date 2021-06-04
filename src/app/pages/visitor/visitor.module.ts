import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ConceptionComponent } from './conception/conception.component';
import { MatCardModule } from '@angular/material/card';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { AccompanimentComponent } from './accompaniment/accompaniment.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatChipsModule } from '@angular/material/chips';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeComponent } from './home/home.component';
import { VisitorRoutingModule } from './visitor-routing.module';
import { FormComponent } from './components/form/form.component';

import { LoginComponent } from './authentification/login.component';
import { MatButtonModule } from '@angular/material/button';

import { ConsumerComponent } from './consumer/consumer.component';
import { RegisterComponent } from './register/register/register.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ConceptionComponent,
    MaintenanceComponent,
    AccompanimentComponent,
    ContactComponent,
    NavbarComponent,
    HomepageComponent,
    HomeComponent,
    FormComponent,
    FormComponent,
    LoginComponent,
    ConsumerComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatGridListModule,
    VisitorRoutingModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class VisitorModule { }
