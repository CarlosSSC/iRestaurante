import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMorePageRoutingModule } from './add-more-routing.module';

import { AddMorePage } from './add-more.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMorePageRoutingModule
  ],
  declarations: [AddMorePage]
})
export class AddMorePageModule {}
