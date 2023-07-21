import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartScreenPageRoutingModule } from './cart-screen-routing.module';

import { CartScreenPage } from './cart-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartScreenPageRoutingModule
  ],
  declarations: [CartScreenPage]
})
export class CartScreenPageModule {}
