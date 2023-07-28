import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//In case of testing specific pages, delete "canActivate: [AuthGuard]" and change "redirectTo:" the page being tested
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'order-selection',
    loadChildren: () => import('./pages/order-selection/order-selection.module').then( m => m.OrderSelectionPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'main-screen',
    loadChildren: () => import('./pages/main-screen/main-screen.module').then( m => m.MainScreenPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'item-information',
    loadChildren: () => import('./pages/item-information/item-information.module').then( m => m.ItemInformationPageModule),
    canActivate: [AuthGuard]
  },  {
    path: 'invoice-configuration',
    loadChildren: () => import('./pages/invoice-configuration/invoice-configuration.module').then( m => m.InvoiceConfigurationPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
