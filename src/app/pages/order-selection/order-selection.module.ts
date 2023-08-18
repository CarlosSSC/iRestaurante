import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderSelectionPageRoutingModule } from './order-selection-routing.module';

import { OrderSelectionPage } from './order-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderSelectionPageRoutingModule
  ],
  declarations: [OrderSelectionPage]
})
export class OrderSelectionPageModule {}
