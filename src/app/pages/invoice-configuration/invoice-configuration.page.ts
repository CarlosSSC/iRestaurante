import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-invoice-configuration',
  templateUrl: './invoice-configuration.page.html',
  styleUrls: ['./invoice-configuration.page.scss'],
})
export class InvoiceConfigurationPage implements OnInit {
  //Configuration variables
  logoUrl: string = '';
  bottomNotice: string = '';
  isValidImage: boolean = false;

  constructor(
    private router: Router,
    private storageService: StorageService
  ) { }

  async ngOnInit() {
    const settings = await this.storageService.get('settings')
    if (settings) {
      this.logoUrl = settings.logo;
      this.bottomNotice = settings.footer
      this.validateLogo()
    }
  }

  back() {
    this.router.navigate(['/invoice-screen'], {replaceUrl: true});

  }

  validateLogo() {
    // Verificar si el URL lleva a una imagen válida
    const img = new Image();
    img.onload = () => {
      this.isValidImage = true;
    };
    img.onerror = () => {
      this.isValidImage = false;
    };
    console.log("Image Validation: " + this.isValidImage);
    img.src = this.logoUrl;
  }

  confirm() {
    if (this.isValidImage) {
      this.storageService.set('settings', {logo: this.logoUrl, footer: this.bottomNotice})
      this.back()
    }
  }

}
