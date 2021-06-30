import { AuthentificationService } from './../../../shared/services/authentification.service';
import { SnackbarService } from './../../../shared/services/snackbar.service';
import { User } from './../../../shared/models/user';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserRole } from './../../../shared/enum/user-role.enum';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    hide = true;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthentificationService,
        private snackbar: SnackbarService,
    ) {}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    }

    // convenience getter for easy access to form fields
    get f(): { [key: string]: AbstractControl } {
        return this.loginForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            this.snackbar.openSnackBar('Identifiant ou mot de passe erroné');
            return;
        }

        this.loading = true;
        this.authenticationService
            .login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                (data: User) => {
                    // Si user diriger vers DASHBOARD sinon vers PLANNING
                    if (data.role === UserRole.USER) {
                        this.router.navigate(['/log/dashboard']);
                    } else {
                        this.router.navigate(['/log/planning']);
                    }
                },
                (error) => {
                    this.error = error;
                    this.loading = false;
                },
            );
    }
}
