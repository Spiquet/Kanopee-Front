import { UserService } from './../../../../shared/services/user.service';
import { User } from './../../../../shared/models/user';
import { SnackbarService } from './../../../../shared/services/snackbar.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MustMatch } from './../../../../shared/validator/must-match.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      birth_date: ['', Validators.required],
      home: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      tel: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    },
      {
        validator: MustMatch('password', 'confirmPassword')
      });
  }
  // convenience getter for easy access to form fields (getter ==> Nous mettons dans f les données)
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.userService.inscription(this.registerForm.value).pipe(first()).subscribe(
      (data) => {
        this.snackbar.openSnackBar(
          'Veuillez valider votre inscription en cliquant sur le lien que vous avez reçu dans votre boite mail'
        );
        this.router.navigate(['/login']);
      },
      (error) => {
			// this.alertService.error(error);
            this.loading = false;
            this.snackbar.openSnackBar(
              'Veuillez vérifier la validité de vos informations'
            );
      }
    );
  }
}
