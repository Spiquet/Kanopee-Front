import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthentificationService } from './../../../shared/services/authentification.service';
import { SnackbarService } from './../../../shared/services/snackbar.service';
import { LoginComponent } from './login.component';
import { autoSpy } from 'autoSpy';
import { render } from '@testing-library/angular';

describe('LoginComponent', () => {
    it('should render the form', async () => {
        await render(LoginComponent, {
            // imports: [ReactiveFormsModule],
        });
        // arrange

        // act
        // const auth = authenticationService.login(testValues);
        // assert
        //expect(auth).toEqual(email);
    });
    xit('when onSubmit is called it should', () => {
        // arrange
        const { build, authenticationService } = setup().default();
        const LoginComponent = build();

        const testValues = {
            username: 'FOO',
            password: 'BAZ',
            handleSubmit: jest.fn(),
        };

        // act
        //LoginComponent.onSubmit();
        // assert
        expect(testValues.handleSubmit).toHaveBeenCalledTimes(1);
        expect(testValues.handleSubmit).toHaveBeenCalledTimes(1);
        expect(authenticationService.login).toBeCalled();
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
