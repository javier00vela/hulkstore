import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './templates/admin/admin.component';
import { IndexComponent } from './templates/admin/components/index/index.component';
import { LoginComponent } from './templates/login/login.component';
import { ManageProductComponent } from './templates/admin/components/manage-product/manage-product.component';
import { ViewProductComponent } from './templates/admin/components/view-product/view-product.component';
import { CartProductComponent } from './templates/admin/components/cart-product/cart-product.component';
const routes: Routes = [
  {
    path : '' , redirectTo : "admin" , pathMatch: 'full'
  },
  { 
    path: "login", component: LoginComponent
  },
  {
    path: "admin", component: AdminComponent , canActivate : [AuthGuard] , 
    children: [
      { path: '', component: IndexComponent },
      { path: 'product/manage/:id', component: ManageProductComponent },
      { path: 'product', component: ViewProductComponent },
      { path: 'cart', component: CartProductComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
