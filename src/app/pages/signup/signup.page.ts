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
  showAlert: boolean = false;
  alertMessage: string = '';
  form: any;
  submitting: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
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
    } else {
      console.log('Campos erróneos', this.errorControl);
      if (!params.confirmPassword || !params.password || !params.firstName){
        this.showAlert = true;
        this.alertMessage = 'No Blank spaces allowed.';
        return;
      } else if (!params.email.toString().includes("@") || !params.email.toString().includes(".")){
        this.showAlert = true;
        this.alertMessage = 'Email not valid.';
        return;
      } else if (params.password.toString().lenght < 8){
        this.showAlert = true;
        this.alertMessage = 'Password not valid.';
        return;
      } else if (params.password.lenght != params.confirmPassword){
        this.showAlert = true;
        this.alertMessage = 'Password confirmation not valid.';
        return;
      }
    }

  }

  get errorControl() {
    return this.form.controls;
  };

}
