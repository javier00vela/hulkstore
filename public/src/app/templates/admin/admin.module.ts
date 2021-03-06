import { NgModule , CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminComponentsModule } from 'src/app/components/admin/admin.module';
import {MatButtonModule } from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './components/index/index.component';
import { ManageProductComponent } from './components/manage-product/manage-product.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { CartProductComponent } from './components/cart-product/cart-product.component';
import { CategoryProductComponent } from './components/category-product/category-product.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';


export const routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AdminComponent,
    IndexComponent,
    ManageProductComponent,
    ViewProductComponent,
    CartProductComponent,
    CategoryProductComponent,
    DetailsProductComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    FlexLayoutModule,
    AppRoutingModule,
    RouterModule.forChild(routes),
    AdminComponentsModule
  ],
  exports : [
    AdminComponent,
    ManageProductComponent,
    ViewProductComponent,
    CartProductComponent
    
  ],
  providers :[
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AdminModule { }
