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
// CanActivate Checks to see if a user can visit a route.
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
return this.userService.getMe().pipe(
map((user) => {
// if there is a user authenticated
if (user) {
// check if route is restricted by role and the role of teh user si oui retourne true
if (route.data.role && route.data.role.includes(user.role)) {
  return true;
} else {
return false;
}
}
}),
// Redirection if the user is not authenticated
catchError((error) => {
this.router.navigateByUrl('/login');
return throwError;
}));
}
}
