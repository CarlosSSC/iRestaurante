import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ItemInformationPageRoutingModule } from './item-information-routing.module';
import { ItemInformationPage } from './item-information.page';
import { SharedModule } from 'src/app/components/SharedModule';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemInformationPageRoutingModule,
    SharedModule
  ],
  declarations: [ItemInformationPage],
})
export class ItemInformationPageModule {}
