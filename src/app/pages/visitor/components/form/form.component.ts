import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from '../../../../shared/services/snackbar.service';
import { first } from 'rxjs/operators';
import { Contact } from '../../../../shared/models/contact';
import { ContactService } from '../../../../shared/services/contact.service';

@Component({

  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: [ './form.component.scss' ]
})
export class FormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private snackbar: SnackbarService,
    private contactService: ContactService
    ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: [ '', Validators.required ],
        objet: [ '', Validators.required ],
        email: [ '', [ Validators.required, Validators.email ] ],
        message: [ '', [ Validators.required ] ],
        acceptTerms: [ false, Validators.requiredTrue ]
      },
    );
    }
    // convenience getter for easy access to form fields
    get f() {
      return this.registerForm.controls;
    }

    onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
        return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4)),
      this.contactService.postEmail(this.registerForm.value).pipe(first()).subscribe(
        (data: Contact) => {
          this.snackbar.openSnackBar(
            'Votre email a bien été envoyé, nous reviendrons vers vous dans les plus bref délais'
            );
          });
    }

onReset() {
      this.submitted = false;
      this.registerForm.reset();
    }
}

