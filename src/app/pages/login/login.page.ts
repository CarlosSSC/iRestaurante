import { AlertController } from '@ionic/angular';
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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private storage: StorageService,
    private alertController: AlertController,
    ) { }

  async ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })

    const user = await this.storage.get("USER_INFO");
    if (user) this.router.navigate(['/order-selection'], {replaceUrl: true});
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
          this.showErrorAlert();
        }
      }
      )
    }
    else console.log('Campos erróneos');
    this.showErrorAlert();

  }

  get errorControl() {
    return this.form.controls;
  };

}
