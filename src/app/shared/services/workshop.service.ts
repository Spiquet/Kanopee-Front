import { environment } from './../../../environments/environment';
import { Workshop } from '../models/workshop';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class WorkshopService {
    static URL = environment.urlServer + 'ateliers';
    workshop: Workshop;

    constructor(private http: HttpClient) {}

    public getAll(): Observable<Workshop[]> {
        return this.http.get(WorkshopService.URL).pipe(map(this.convertDateFromServerToWorkshops));
    }

    private convertDateFromServerToWorkshops(workshops: any[]): Workshop[] {
        return workshops.map((workshop) => new Workshop(workshop));
    }

    public getById(id: number): Observable<Workshop> {
        return this.http.get(WorkshopService.URL + '/' + id).pipe(map((workshop: Workshop) => new Workshop(workshop)));
    }

    public create(fd: FormData): Observable<any> {
        return this.http.post(WorkshopService.URL + '/file', fd);
    }

    public update(id: number, fd: FormData): Observable<any> {
        return this.http.put(WorkshopService.URL + '/fileupload/' + id, fd);
    }

    public delete(id: number): Observable<any> {
        return this.http.delete(WorkshopService.URL + '/' + id);
    }
}
