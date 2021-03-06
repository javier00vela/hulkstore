import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import {MatButtonModule } from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
@NgModule({
  declarations: [
    AdminHeaderComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports : [
    AdminHeaderComponent,
    CardComponent
  ]
})
export class AdminComponentsModule { }
