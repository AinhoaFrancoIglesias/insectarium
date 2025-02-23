import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';
import { ShopModule } from './shop/shop.module';
import { GuidesModule } from './guides/guides.module';
import { GuidesRoutingModule } from './guides/guides-routing.module';
import { BlogComponent } from './blog/blog.component'; 
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    ContactModule,
    ShopModule,
    GuidesModule,
    GuidesRoutingModule,
    ReactiveFormsModule
    ,
  ],
  exports: [
    HomeModule,
    ContactModule,
    ShopModule,
    GuidesModule
  ]
})
export class PagesModule { }
