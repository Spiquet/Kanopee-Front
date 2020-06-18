import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  submitted = false;
  constructor() { }

  newsLetterMail = new FormGroup({
    email: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
  }

  onSubmit() {

  }
}
