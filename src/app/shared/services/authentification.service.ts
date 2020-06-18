import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
	providedIn: 'root'
})
export class AuthentificationService {
	static URL = environment.urlServer + 'auth/';

	constructor(private http: HttpClient, private userService: UserService) {}

	public login(email: string, password: string): Observable<any> {
		return this.http
			.post(AuthentificationService.URL + 'signin', { email, password }, { observe: 'response' })
			.pipe(
				map((response: HttpResponse<any>) => {
					const token = response.headers.get('JWT-TOKEN');
					// store user details and jwt token in local storage to keep user logged in between page refreshes
					localStorage.setItem('TOKEN', token);
					this.userService.user = response.body;
					return response.body;
				})
			);
	}

	logout() {
		localStorage.clear();
	}
}
