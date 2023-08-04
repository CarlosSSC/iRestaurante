import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfigurationModalComponent } from 'src/app/components/configuration-modal/configuration-modal.component';

@Component({
  selector: 'app-configuration-test',
  templateUrl: './configuration-test.page.html',
  styleUrls: ['./configuration-test.page.scss'],
})
export class ConfigurationTestPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ConfigurationModalComponent,
      cssClass: 'configuration-modal-css',
    });
    await modal.present();
  }


}
