import { environment } from './../../../environments/environment';
import { User } from '../../shared/models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	static URL = environment.urlServer + 'users';
	static basedUrl = environment.urlServer;

	user: User;
	constructor(private http: HttpClient) {}

	public connexion(email: string, password: string) {
		return this.http.post(UserService.basedUrl + 'auth/signin', { email, password }, { observe: 'response' }).pipe(
			map((response: HttpResponse<any>) => {
				const token = response.headers.get('JWT-TOKEN');
				localStorage.setItem('TOKEN', token);
				this.user = response.body;
				return response.body;
			})
		);
	}

	public inscription(values: any) {
		return this.http.post(UserService.basedUrl + 'auth/signup', values);
	}

	public getAll(): Observable<User[]> {
		return this.http.get(UserService.URL).pipe(map(this.convertDateFromServerToUsers));
	}

	// récupère un user et le stock
	public getMe() {
		return this.http.get(UserService.URL + '/me').pipe(tap((user: User) => (this.user = user)));
	}

	// Se base sur getMe en vérifiant s'il y a un user et en le transformant en boléen
	public isLogged() {
		return this.getMe().pipe(map((user: User) => user != null));
	}

	private convertDateFromServerToUsers(users: any[]): User[] {
		return users.map((user) => new User(user));
	}

	public getKulteur(): Observable<User[]> {
		return this.http.get(UserService.URL + '/role').pipe(map(this.convertDateFromServerToUsers));
	}

	public getById(id: number): Observable<User> {
		return this.http.get(UserService.URL + '/' + id).pipe(map((user: User) => new User(user)));
	}

	public create(user: User): Observable<any> {
		return this.http.post(UserService.URL, user);
	}

	public update(user: User): Observable<any> {
		return this.http.put(UserService.URL + '/' + user.id, user);
	}

	public delete(id: number): Observable<any> {
		return this.http.delete(UserService.URL + '/' + id);
	}
}
