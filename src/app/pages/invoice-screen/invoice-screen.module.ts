import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { InvoiceScreenPageRoutingModule } from './invoice-screen-routing.module';

import { InvoiceScreenPage } from './invoice-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoiceScreenPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InvoiceScreenPage]
})
export class InvoiceScreenPageModule {}
