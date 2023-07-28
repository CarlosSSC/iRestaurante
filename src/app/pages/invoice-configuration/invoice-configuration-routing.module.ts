import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceConfigurationPage } from './invoice-configuration.page';

const routes: Routes = [
  {
    path: '',
    component: InvoiceConfigurationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceConfigurationPageRoutingModule {}
