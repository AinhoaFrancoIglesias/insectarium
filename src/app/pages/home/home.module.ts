import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from '../../auth/auth-routing.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [ 
    CommonModule,
    ReactiveFormsModule,  
    AuthRoutingModule
  ],
  exports: [ 
    HomeComponent
  ]
})
export class HomeModule { }
