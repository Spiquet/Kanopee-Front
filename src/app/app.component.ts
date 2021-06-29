import { UserService } from './shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'kanopeeApp';

    router: string;
    constructor(private userService: UserService, private _router: Router) {}

    ngOnInit() {}
}
