import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; 
import { ProfileComponent } from './auth/profile/profile.component';
import { FavoritesComponent } from './favs/favorites/favorites.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AllshopComponent } from './pages/shop/allshop/allshop.component';
import { AllguidesComponent } from './pages/guides/allguides/allguides.component';
import { ShoppingcartComponent } from './favs/shoppingcart/shoppingcart.component';
import { ShoparachnidaComponent } from './pages/shop/shoparachnida/shoparachnida.component';
import { ShopblattodeaComponent } from './pages/shop/shopblattodea/shopblattodea.component';
import { ShopchilopodaComponent } from './pages/shop/shopchilopoda/shopchilopoda.component';
import { ShopcoleopteraComponent } from './pages/shop/shopcoleoptera/shopcoleoptera.component';
import { ShopcrustaceaComponent } from './pages/shop/shopcrustacea/shopcrustacea.component';
import { ShopdiplopodaComponent } from './pages/shop/shopdiplopoda/shopdiplopoda.component';
import { ShophymenopteraComponent } from './pages/shop/shophymenoptera/shophymenoptera.component';
import { ShopisopodaComponent } from './pages/shop/shopisopoda/shopisopoda.component';
import { ShoplepidopteraComponent } from './pages/shop/shoplepidoptera/shoplepidoptera.component';
import { ShopmantodeaComponent } from './pages/shop/shopmantodea/shopmantodea.component';
import { ShopphasmatodeaComponent } from './pages/shop/shopphasmatodea/shopphasmatodea.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'allshop', component: AllshopComponent },
  { path: 'allguides', component: AllguidesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'shoppingcart', component: ShoppingcartComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },


  // Rutas de las tiendas por categoría
  { path: 'shop/shoparachnida', component: ShoparachnidaComponent },
  { path: 'shop/shopblattodea', component: ShopblattodeaComponent },
  { path: 'shop/shopchilopoda', component: ShopchilopodaComponent },
  { path: 'shop/shopcoleoptera', component: ShopcoleopteraComponent },
  { path: 'shop/shopcrustacea', component: ShopcrustaceaComponent },
  { path: 'shop/shopdiplopoda', component: ShopdiplopodaComponent },
  { path: 'shop/shopgastropoda', component: ShopdiplopodaComponent },
  { path: 'shop/shophymenoptera', component: ShophymenopteraComponent },
  { path: 'shop/shopisopoda', component: ShopisopodaComponent },
  { path: 'shop/shoplepidoptera', component: ShoplepidopteraComponent },
  { path: 'shop/shopmantodea', component: ShopmantodeaComponent },
  { path: 'shop/shopphasmatodea', component: ShopphasmatodeaComponent},

  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirigir a home si la ruta está vacía
  { path: '**', redirectTo: 'allshop' } // Manejo de rutas desconocidas
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
