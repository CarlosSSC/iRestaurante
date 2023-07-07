import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: any;
  submitting: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController,
    ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  async showErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Login Error',
      message: 'The Email or Password are not correct.',
      buttons: ['OK']
    });

    await alert.present();
  }

  submit() {
    this.submitting = true;
    console.log(this.form.value)
    if (this.form.valid) {
      this.authService.login({
        email: this.form.value.email,
        password: CryptoJS.AES.encrypt(this.form.value.password, 'lxgJMPRqhU').toString(),
      }).subscribe(
        response => {
          if (response?.success) {
            this.router.navigate(['/order-selection'])
          }
          else {
            console.log('No valido');
            this.showErrorAlert();
          }
        },
      )
    }
    else console.log('Campos erróneos');
    this.showErrorAlert();

  }

  get errorControl() {
    return this.form.controls;
  };

}
