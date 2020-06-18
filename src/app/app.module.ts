import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './pages/components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderInterceptor } from './cores/auth.interceptor';
import { PageNotFoundComponent } from './cores/page-not-found/page-not-found.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { PastDatePipe } from './shared/pipe/past-date.pipe';

import { RolePermissionDirective } from './shared/directive/role-permission.directive';



@NgModule({

  declarations: [
    FooterComponent,
    AppComponent,
    PageNotFoundComponent,
    PastDatePipe,
    RolePermissionDirective,
   ],

	imports: [
		BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatFormFieldModule,
		NoopAnimationsModule,
    HttpClientModule,
    MatInputModule,
		ReactiveFormsModule,
		NgbModule,
		MatIconModule,
		MatDialogModule,
		AppRoutingModule,
	],

	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HeaderInterceptor,
			multi: true
		}
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
