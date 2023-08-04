import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-configuration-modal',
  templateUrl: './configuration-modal.component.html',
  styleUrls: ['./configuration-modal.component.scss'],
})
export class ConfigurationModalComponent  implements OnInit {
  logoUrl: string = '';
  bottomNotice: string = '';
  isValidImage: boolean = false;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  saveConfiguration() {
    // Save data for invoice.
    // Add code to connect with backend
    console.log('Logo URL:', this.logoUrl);
    console.log('Bottom Notice:', this.bottomNotice);

    // Cierra el modal después de guardar los datos
    this.modalController.dismiss();
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
    img.src = this.logoUrl;
  }

}
