import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { AuthentificationService } from './authentification.service';
import { autoSpy } from 'autoSpy';
import { error } from 'protractor';

describe('AuthentificationService', () => {
    xit('if the login form is empty should do nothing', () => {
        throw new Error('Work in progress');

        // arrange
        const { build } = setup().default();
        const authService = build();
        const email = '';
        const password = '';
        const login = jest.spyOn(authService.login as any, 'login');

        // act
        authService.login(email, password);
        // expect(a).toEqual
        expect(login).not.toHaveBeenCalled();
    });

    // it('when login is called it should', () => {
    //     // arrange
    //     const { build } = setup().default();
    //     const authService = build();
    //     // act
    //     authService.login('', '');
    //     // assert
    //     // expect(a).toEqual
    // });
    // it('when logout is called it should', () => {
    //     // arrange
    //     const { build } = setup().default();
    //     const a = build();
    //     // act
    //     a.logout();
    //     // assert
    //     // expect(a).toEqual
    // });

    // it('if the login form is empty should do nothing', () => {
    //     // arrange
    //     const { build } = setup().default();
    //     const authService = build();

    //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //     const logout = jest.spyOn(authService.logout as any, 'logout');

    //     // act
    //     authService.logout();
    //     // expect(a).toEqual
    //     expect(logout).toBeCalled();
    // });
});

function setup() {
    const http = autoSpy(HttpClient);
    const userService = autoSpy(UserService);
    const builder = {
        http,
        userService,
        default() {
            return builder;
        },
        build() {
            return new AuthentificationService(http, userService);
        },
    };

    return builder;
}
