import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  form: any;
  submitting: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['Test', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  submit() {
    this.submitting = true;
    const params = this.form.value;
    if (this.form.valid && params.password == params.confirmPassword) {
      this.authService.register({
        email: params.email,
        firstName: params.firstName,
        lastName: params.lastName,
        password: CryptoJS.AES.encrypt(params.password, 'lxgJMPRqhU').toString(),

      }).subscribe({
        next: (result) => {
          this.router.navigate(['/login'], {replaceUrl: true})
        },
        error: (error) => {
          throw new Error(error)
        }
      })
    } else console.log('Campos erróneos', this.errorControl);

  }

  get errorControl() {
    return this.form.controls;
  };

}
