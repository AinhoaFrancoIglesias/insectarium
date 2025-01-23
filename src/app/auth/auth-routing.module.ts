import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from '../pages/home/home.component'; 
import { ProfileComponent } from './profile/profile.component';
import { AllshopComponent } from '../pages/shop/allshop/allshop.component';
import { AllguidesComponent } from '../pages/guides/allguides/allguides.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { ShoppingcartComponent } from '../favs/shoppingcart/shoppingcart.component';
import { FavoritesComponent } from '../favs/favorites/favorites.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'home', component: HomeComponent},
  { path: 'allshop', component: AllshopComponent},
  { path: 'allguides', component: AllguidesComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'shoppingcart', component: ShoppingcartComponent},
  { path: 'favorites', component: FavoritesComponent},


  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
