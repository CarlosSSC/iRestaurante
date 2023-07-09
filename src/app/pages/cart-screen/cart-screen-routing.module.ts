import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartScreenPage } from './cart-screen.page';

const routes: Routes = [
  {
    path: '',
    component: CartScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartScreenPageRoutingModule {}
