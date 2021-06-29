import { environment } from './../../../environments/environment';
import { Site } from '../models/site';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root',
})
export class SiteService {
    static URL = environment.urlServer + 'sites';

    constructor(private http: HttpClient) {}

    public getAll(): Observable<Site[]> {
        return this.http.get(SiteService.URL).pipe(map(this.convertDataFromServerToSites));
    }

    private convertDataFromServerToSites(sites: any[]): Site[] {
        return sites.map((site) => {
            return new Site(site);
        });
    }

    public getById(id: number): Observable<Site> {
        return this.http.get(SiteService.URL + '/' + id).pipe(map((site: Site) => new Site(site)));
    }

    public create(site: Site): Observable<any> {
        return this.http.post(SiteService.URL, site);
    }

    public update(site: Site): Observable<any> {
        return this.http.put(SiteService.URL + '/' + site.id, site);
    }

    public delete(id: number): Observable<any> {
        return this.http.delete(SiteService.URL + '/' + id);
    }
}
