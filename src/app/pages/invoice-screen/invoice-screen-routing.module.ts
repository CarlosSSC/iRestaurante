import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceScreenPage } from './invoice-screen.page';

const routes: Routes = [
  {
    path: '',
    component: InvoiceScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceScreenPageRoutingModule {}
