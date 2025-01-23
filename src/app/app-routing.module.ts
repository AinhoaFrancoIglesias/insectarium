import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { AllshopComponent } from './pages/shop/allshop/allshop.component';
import { AllguidesComponent } from './pages/guides/allguides/allguides.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthRoutingModule } from './auth/auth-routing.module';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'home', component: HomeComponent},
  { path: 'allshop', component: AllshopComponent},
  { path: 'allguides', component: AllguidesComponent},
  { path: 'contact', component: ContactComponent},

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
