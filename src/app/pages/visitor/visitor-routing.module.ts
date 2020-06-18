import { ConsumerComponent } from './consumer/consumer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ConceptionComponent } from './conception/conception.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { AccompanimentComponent } from './accompaniment/accompaniment.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentification/login.component';
import { RegisterComponent } from './register/register/register.component';

// routes définition
const visiteurRoutes: Routes = [
	{ path: '', component: HomepageComponent },
	{ path: 'accueil', component: HomeComponent },
	{ path: 'conception', component: ConceptionComponent },
	{ path: 'entretien', component: MaintenanceComponent },
	{ path: 'accompagnement', component: AccompanimentComponent },
	{ path: 'services', component: ConsumerComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent }
];

@NgModule({
	imports: [ RouterModule.forChild(visiteurRoutes) ],
	exports: [ RouterModule ]
})
export class VisitorRoutingModule {}
