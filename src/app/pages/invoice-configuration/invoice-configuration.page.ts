import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
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

}
