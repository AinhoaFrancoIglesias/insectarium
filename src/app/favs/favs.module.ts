import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites/favorites.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';



@NgModule({
  declarations: [
    FavoritesComponent,
    ShoppingcartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FavoritesComponent,
    ShoppingcartComponent
  ]
})
export class FavsModule { }
