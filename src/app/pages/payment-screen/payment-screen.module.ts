import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaymentScreenPageRoutingModule } from './payment-screen-routing.module';
import { PaymentScreenPage } from './payment-screen.page';
import { SharedModule } from 'src/app/components/SharedModule';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentScreenPageRoutingModule,
    SharedModule
  ],
  declarations: [PaymentScreenPage]
})
export class PaymentScreenPageModule {}
