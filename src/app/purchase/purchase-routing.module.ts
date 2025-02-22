import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { AllguidesComponent } from '../pages/guides/allguides/allguides.component';
import { HomeComponent } from '../pages/home/home.component';
import { AllshopComponent } from '../pages/shop/allshop/allshop.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'allshop', component: AllshopComponent },
  { path: 'allguides', component: AllguidesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shoppingcart', component: CartComponent },
  { path: 'favorites', component: FavoritesComponent },
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
