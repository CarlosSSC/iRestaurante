import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoiceConfigurationPageRoutingModule } from './invoice-configuration-routing.module';

import { InvoiceConfigurationPage } from './invoice-configuration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoiceConfigurationPageRoutingModule
  ],
  declarations: [InvoiceConfigurationPage]
})
export class InvoiceConfigurationPageModule {}
