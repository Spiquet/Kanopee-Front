import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({

  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: [ './form.component.scss' ]
})
export class FormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        title: [ '', Validators.required ],
        firstName: [ '', Validators.required ],
        lastName: [ '', Validators.required ],
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
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onReset() {
      this.submitted = false;
      this.registerForm.reset();
    }
}

