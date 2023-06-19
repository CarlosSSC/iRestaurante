import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MainScreenPageRoutingModule } from './main-screen-routing.module';
import { MainScreenPage } from './main-screen.page';
import { SharedModule } from 'src/app/components/SharedModule';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainScreenPageRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [MainScreenPage]
})
export class MainScreenPageModule {}
