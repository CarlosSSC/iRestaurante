import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'order-selection',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'order-selection',
    loadChildren: () => import('./pages/order-selection/order-selection.module').then( m => m.OrderSelectionPageModule)
  },
  {
    path: 'main-screen',
    loadChildren: () => import('./pages/main-screen/main-screen.module').then( m => m.MainScreenPageModule)
  },
  {
    path: 'item-information',
    loadChildren: () => import('./pages/item-information/item-information.module').then( m => m.ItemInformationPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
