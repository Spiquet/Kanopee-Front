import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HeaderInterceptor implements HttpInterceptor {
constructor() {}

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   // Retrieve the authentication token from local storage
    const token = localStorage.getItem('TOKEN');
    // If there's no token
    if (!token) {
    // Returning the request without modification
      return next.handle(req);
    }
    // otherwise
    // Updating the original headers with Authorization and Bearer
    const headers = req.headers.set('Authorization', 'Bearer ' + token);

    // Clone the request and replace the original headers with
    // Cloned headers, updated with permission.
    const authReq = req.clone({ headers });
     // sends the cloned request with header to the next handler or BackEnd (this is the case here).
    return next.handle(authReq);
}
}
