import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as CryptoJS from 'crypto-js';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: any;
  submitting: boolean = false;
  showError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private storage: StorageService,
    ) { }

  async ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })

    const user = await this.storage.get("USER_INFO");
    if (user) this.router.navigate(['/order-selection'], {replaceUrl: true});
  }

  submit() {
    this.submitting = true;
    if (this.form.valid) {
      this.authService.login({
        email: this.form.value.email,
        password: CryptoJS.AES.encrypt(this.form.value.password, 'lxgJMPRqhU').toString(),
      }).subscribe({
        next: async (result) => {
          this.router.navigate(['/order-selection'], {replaceUrl: true});
        },
        error: (error) => {
          throw new Error(error);
        }
      }
      )
    }
    else {
      console.log('Campos erróneos');
      this.showError = true;
    }
  }

  get errorControl() {
    return this.form.controls;
  };

}
