import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
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
  },
  {
    path: 'cart-screen',
    loadChildren: () => import('./pages/cart-screen/cart-screen.module').then( m => m.CartScreenPageModule)
  },
  {
    path: 'payment-screen',
    loadChildren: () => import('./pages/payment-screen/payment-screen.module').then( m => m.PaymentScreenPageModule)
  },
  {
    path: 'add-more',
    loadChildren: () => import('./pages/add-more/add-more.module').then( m => m.AddMorePageModule)
  },  {
    path: 'invoice-screen',
    loadChildren: () => import('./pages/invoice-screen/invoice-screen.module').then( m => m.InvoiceScreenPageModule)
  },
  {
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
