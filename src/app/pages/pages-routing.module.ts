import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllshopComponent } from './shop/allshop/allshop.component';
import { AllguidesComponent } from './guides/allguides/allguides.component';
import { ContactComponent } from './contact/contact.component';
import { ShoppingcartComponent } from '../favs/shoppingcart/shoppingcart.component';
import { FavoritesComponent } from '../favs/favorites/favorites.component';
import { ShoparachnidaComponent } from './shop/shoparachnida/shoparachnida.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'allshop', component: AllshopComponent },
  { path: 'allguides', component: AllguidesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shoppingcart', component: ShoppingcartComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'shoparachnida', component: ShoparachnidaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
