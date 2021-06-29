import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('TOKEN');
        if (!token) {
            return next.handle(req);
        }
        const headers = req.headers.set('Authorization', 'Bearer ' + token);

        const authReq = req.clone({ headers });
        return next.handle(authReq);
    }
}
