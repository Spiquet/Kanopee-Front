import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthentificationService } from './../../../shared/services/authentification.service';
import { SnackbarService } from './../../../shared/services/snackbar.service';
import { LoginComponent } from './login.component';
import { autoSpy } from 'autoSpy';

describe('LoginComponent', () => {
    it('when ngOnInit is called it should', () => {
        // arrange
        const { build } = setup().default();
        const l = build();
        // act
        l.ngOnInit();
        // assert
        // expect(l).toEqual
    });
    it('when onSubmit is called it should', () => {
        // arrange
        const { build } = setup().default();
        const l = build();
        // act
        l.onSubmit();
        // assert
        // expect(l).toEqual
    });
});

function setup() {
    const formBuilder = autoSpy(FormBuilder);
    const route = autoSpy(ActivatedRoute);
    const router = autoSpy(Router);
    const authenticationService = autoSpy(AuthentificationService);
    const snackbar = autoSpy(SnackbarService);
    const builder = {
        formBuilder,
        route,
        router,
        authenticationService,
        snackbar,
        default() {
            return builder;
        },
        build() {
            return new LoginComponent(formBuilder, route, router, authenticationService, snackbar);
        },
    };

    return builder;
}
