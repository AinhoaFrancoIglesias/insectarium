import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { AuthRoutingModule } from '../../auth/auth-routing.module';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
    
  ], 
  exports: [
    ContactComponent
  ]

})
export class ContactModule { }
