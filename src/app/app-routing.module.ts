import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; 
import { ProfileComponent } from './auth/profile/profile.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AllshopComponent } from './pages/shop/allshop/allshop.component';
import { AllguidesComponent } from './pages/guides/allguides/allguides.component';
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
import { ShopgastropodaComponent } from './pages/shop/shopgastropoda/shopgastropoda.component';
import { GuidesarachnidaComponent } from './pages/guides/guidesarachnida/guidesarachnida.component';
import { GuidesblattodeaComponent } from './pages/guides/guidesblattodea/guidesblattodea.component';
import { GuideschilopodaComponent } from './pages/guides/guideschilopoda/guideschilopoda.component';
import { GuidescoleopteraComponent } from './pages/guides/guidescoleoptera/guidescoleoptera.component';
import { GuidescrustaceaComponent } from './pages/guides/guidescrustacea/guidescrustacea.component';
import { GuidesdiplopodaComponent } from './pages/guides/guidesdiplopoda/guidesdiplopoda.component';
import { GuidesgastropodaComponent } from './pages/guides/guidesgastropoda/guidesgastropoda.component';
import { GuideshymenopteraComponent } from './pages/guides/guideshymenoptera/guideshymenoptera.component';
import { GuidesisopodaComponent } from './pages/guides/guidesisopoda/guidesisopoda.component';
import { GuideslepidopteraComponent } from './pages/guides/guideslepidoptera/guideslepidoptera.component';
import { GuidesmantodeaComponent } from './pages/guides/guidesmantodea/guidesmantodea.component';
import { GuidesphasmatodeaComponent } from './pages/guides/guidesphasmatodea/guidesphasmatodea.component';
import { CartComponent } from './purchase/cart/cart.component';
import { BlogComponent } from './pages/blog/blog.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

/**
 * Módulo de enrutamiento para la aplicación.
 * 
 * Define todas las rutas de navegación y las redirecciones dentro de la aplicación, incluyendo las rutas
 * a las secciones de la tienda, guías, perfil del usuario, inicio de sesión, registro, blog y contacto.
 */
const routes: Routes = [
  // Ruta para la página de inicio
  { path: 'home', component: HomeComponent },
  
  // Ruta para la tienda de todos los productos
  { path: 'allshop', component: AllshopComponent },
  
  // Ruta para todas las guías
  { path: 'allguides', component: AllguidesComponent },
  
  // Ruta para la página de contacto
  { path: 'contact', component: ContactComponent },
  
  // Rutas de autenticación
  { path: 'profile', component: ProfileComponent }, // Perfil del usuario
  { path: 'login', component: LoginComponent }, // Login de usuario
  { path: 'register', component: RegisterComponent }, // Registro de usuario
  { path: 'blog', component: BlogComponent }, // Blog de la tienda

  // Rutas de las tiendas por categoría
  { path: 'shop/shoparachnida', component: ShoparachnidaComponent },
  { path: 'shop/shopblattodea', component: ShopblattodeaComponent },
  { path: 'shop/shopchilopoda', component: ShopchilopodaComponent },
  { path: 'shop/shopcoleoptera', component: ShopcoleopteraComponent },
  { path: 'shop/shopcrustacea', component: ShopcrustaceaComponent },
  { path: 'shop/shopdiplopoda', component: ShopdiplopodaComponent },
  { path: 'shop/shopgastropoda', component: ShopgastropodaComponent },
  { path: 'shop/shophymenoptera', component: ShophymenopteraComponent },
  { path: 'shop/shopisopoda', component: ShopisopodaComponent },
  { path: 'shop/shoplepidoptera', component: ShoplepidopteraComponent },
  { path: 'shop/shopmantodea', component: ShopmantodeaComponent },
  { path: 'shop/shopphasmatodea', component: ShopphasmatodeaComponent },

  // Ruta para el carrito de compras
  { path: 'shoppingcart', component: CartComponent },

  // Rutas de las guías por categoría
  { path: 'guides/guidesarachnida', component: GuidesarachnidaComponent },
  { path: 'guides/guidesblattodea', component: GuidesblattodeaComponent },
  { path: 'guides/guideschilopoda', component: GuideschilopodaComponent },
  { path: 'guides/guidescoleoptera', component: GuidescoleopteraComponent },
  { path: 'guides/guidescrustacea', component: GuidescrustaceaComponent },
  { path: 'guides/guidesdiplopoda', component: GuidesdiplopodaComponent },
  { path: 'guides/guidesgastropoda', component: GuidesgastropodaComponent },
  { path: 'guides/guideshymenoptera', component: GuideshymenopteraComponent },
  { path: 'guides/guidesisopoda', component: GuidesisopodaComponent },
  { path: 'guides/guideslepidoptera', component: GuideslepidopteraComponent },
  { path: 'guides/guidesmantodea', component: GuidesmantodeaComponent },
  { path: 'guides/guidesphasmatodea', component: GuidesphasmatodeaComponent },

  // Refirección para la página común para las rutas desconocidas
  { path: 'notfound', component: NotfoundComponent },

  // Redirección por defecto a la página de inicio si la ruta está vacía
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  // Redirección para rutas no encontradas
  { path: '**', redirectTo: 'notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuración del enrutador con las rutas definidas
  exports: [RouterModule]  // Exportación del módulo de rutas
})
export class AppRoutingModule { }
