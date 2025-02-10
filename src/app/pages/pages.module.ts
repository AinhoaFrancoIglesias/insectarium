import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';
import { ShopModule } from './shop/shop.module';
import { GuidesModule } from './guides/guides.module';
import { GuidesRoutingModule } from './guides/guides-routing.module';  // Agrega esta línea

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    ContactModule,
    ShopModule,
    GuidesModule,
    GuidesRoutingModule
  ],
  exports: [
    HomeModule,
    ContactModule,
    ShopModule,
    GuidesModule
  ]
})
export class PagesModule { }
