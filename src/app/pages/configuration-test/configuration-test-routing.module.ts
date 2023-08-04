import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigurationTestPage } from './configuration-test.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationTestPageRoutingModule {}
