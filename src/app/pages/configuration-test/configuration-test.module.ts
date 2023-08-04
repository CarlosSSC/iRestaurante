import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurationTestPageRoutingModule } from './configuration-test-routing.module';

import { ConfigurationTestPage } from './configuration-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurationTestPageRoutingModule
  ],
  declarations: [ConfigurationTestPage]
})
export class ConfigurationTestPageModule {}
