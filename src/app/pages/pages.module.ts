import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';
import { ShopModule } from './shop/shop.module';
import { GuidesModule } from './guides/guides.module';


@NgModule({
  declarations: [
  ],
  imports: [
  ],
  exports: [
    HomeModule,
    ContactModule,
    ShopModule,
    GuidesModule
  ]
})
export class PagesModule { }
