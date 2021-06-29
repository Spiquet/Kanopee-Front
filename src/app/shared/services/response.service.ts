import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from '../models/response';

@Injectable({
    providedIn: 'root',
})
export class ResponseService {
    static URL = environment.urlServer + 'responses';

    constructor(private http: HttpClient, private userService: UserService) {}
    public getAll(): Observable<Response[]> {
        return this.http.get(ResponseService.URL).pipe(map(this.convertDataFromServerToResponses));
    }

    private convertDataFromServerToResponses(responses: any[]): Response[] {
        return responses.map((response) => {
            return new Response(response);
        });
    }

    public getById(id: number): Observable<Response> {
        return this.http.get(ResponseService.URL + '/' + id).pipe(map((response: Response) => new Response(response)));
    }

    public create(response: Response): Observable<any> {
        response.user = this.userService.user;
        return this.http.post(ResponseService.URL, response);
    }

    public update(response: Response): Observable<any> {
        return this.http.put(ResponseService.URL + '/' + response.id, response);
    }

    public delete(id: number): Observable<any> {
        return this.http.delete(ResponseService.URL + '/' + id);
    }
}
