import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthentificationService } from '../shared/services/authentification.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
	constructor(
		private router: Router,
		private userService: UserService,
		private authenticationService: AuthentificationService
	) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		// Redirection si l'user n'est pas authentifié
		return this.userService.getMe().pipe(
			map((user) => {
				if (user) {
					// check if route is restricted by role
					if (route.data.role && route.data.role.includes(user.role)) {
						return true;
					} else {
						return false;
					}
				}
			}),
			catchError((error) => {
				this.router.navigateByUrl('/login');
				return throwError;
			})
		);
	}
}
