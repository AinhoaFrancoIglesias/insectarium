import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { AllguidesComponent } from '../pages/guides/allguides/allguides.component';
import { HomeComponent } from '../pages/home/home.component';
import { AllshopComponent } from '../pages/shop/allshop/allshop.component';

/**
 * Módulo de rutas para el área de compras.
 * 
 * Define las rutas disponibles en la sección de compras, incluyendo el carrito, favoritos,
 * página de inicio, tienda, guías y contacto.
 */
const routes: Routes = [
  // Ruta para el carrito de compras
  { path: 'cart', component: CartComponent },
    
  // Ruta para la página de inicio
  { path: 'home', component: HomeComponent },
  
  // Ruta para la tienda con todos los productos
  { path: 'allshop', component: AllshopComponent },
  
  // Ruta para las guías
  { path: 'allguides', component: AllguidesComponent },
  
  // Ruta para la página de contacto
  { path: 'contact', component: ContactComponent },
  
  // Ruta duplicada para el carrito de compras (presumiblemente por error)
  { path: 'shoppingcart', component: CartComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Configuración del enrutador con las rutas definidas
  exports: [RouterModule]  // Exportación del módulo de rutas
})
export class PurchaseRoutingModule { }
