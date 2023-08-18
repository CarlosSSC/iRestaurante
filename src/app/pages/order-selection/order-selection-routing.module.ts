import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderSelectionPage } from './order-selection.page';

const routes: Routes = [
  {
    path: '',
    component: OrderSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderSelectionPageRoutingModule {}
