import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemInformationPage } from './item-information.page';

const routes: Routes = [
  {
    path: '',
    component: ItemInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemInformationPageRoutingModule {}
