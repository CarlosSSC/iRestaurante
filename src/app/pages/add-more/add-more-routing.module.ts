import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMorePage } from './add-more.page';

const routes: Routes = [
  {
    path: '',
    component: AddMorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMorePageRoutingModule {}
