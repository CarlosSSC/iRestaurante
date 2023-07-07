import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';

@Component({
  selector: 'app-order-selection',
  templateUrl: './order-selection.page.html',
  styleUrls: ['./order-selection.page.scss'],
})
export class OrderSelectionPage implements OnInit {

  isSupported = false;

  constructor(private alertController: AlertController, navCtrl: NavController) { }

  ngOnInit() {
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    /*const result = await BarcodeScanner.scan();
    if (result.content && result.format === 'QR_CODE') {
      // Verificar el contenido del código QR
      if (result.content === 'CÓDIGO_CORRECTO') { // Reemplazar 'CÓDIGO_CORRECTO' con el valor correcto que deseas
        this.router.navigate(['/main-screen']); // Reemplazar 'otra-pagina' con la ruta de la página a la que deseas redirigir
      } else {
        // Código QR incorrecto
        console.log('Código QR incorrecto');
      }
    } else {
      // No se escaneó un código QR válido
      console.log('No se escaneó un código QR válido');
    }*/
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }

}


