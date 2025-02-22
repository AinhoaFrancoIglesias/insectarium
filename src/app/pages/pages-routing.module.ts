import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllshopComponent } from './shop/allshop/allshop.component';
import { AllguidesComponent } from './guides/allguides/allguides.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from '../purchase/cart/cart.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'allshop', component: AllshopComponent },
  { path: 'allguides', component: AllguidesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shoppingcart', component: CartComponent },
  { path: 'blog', component: BlogComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
