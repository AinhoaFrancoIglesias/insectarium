import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllshopComponent } from './shop/allshop/allshop.component';
import { AllguidesComponent } from './guides/allguides/allguides.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from '../purchase/cart/cart.component';
import { BlogComponent } from './blog/blog.component';

/**
 * Módulo de rutas para la aplicación.
 * 
 * Este módulo contiene las rutas utilizadas por la aplicación para navegar entre diferentes páginas,
 * como la página de inicio, tienda, guías, contacto, carrito de compras y blog. Estas rutas permiten
 * a los usuarios acceder a las diferentes secciones de la tienda y obtener más información sobre productos,
 * guías, y contacto con la tienda.
 */
const routes: Routes = [
  { path: 'home', component: HomeComponent },  // Ruta a la página de inicio
  { path: 'allshop', component: AllshopComponent },  // Ruta a la tienda con todos los productos
  { path: 'allguides', component: AllguidesComponent },  // Ruta a la página con todas las guías
  { path: 'contact', component: ContactComponent },  // Ruta a la página de contacto
  { path: 'shoppingcart', component: CartComponent },  // Ruta al carrito de compras
  { path: 'blog', component: BlogComponent },  // Ruta a la página de blog
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Configuración de rutas en este módulo
  exports: [RouterModule]  // Exportación del RouterModule para su uso en otros módulos
})
export class PagesRoutingModule {}
