import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';  
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CartComponent } from './purchase/cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesModule } from './pages/pages.module';

/**
 * Módulo principal de la aplicación.
 * 
 * Este módulo incluye los componentes, módulos y configuraciones necesarias
 * para la ejecución de la aplicación. Se encarga de inicializar el sistema de rutas,
 * la autenticación, y la integración con otros módulos y componentes como el carrito de compras.
 * 
 * @export
 * @class AppModule
 */
@NgModule({
  declarations: [
    AppComponent,  // Componente principal de la aplicación
    CartComponent  // Componente que gestiona el carrito de compras
  ],
  imports: [
    BrowserModule,        // Módulo principal para aplicaciones web
    AppRoutingModule,     // Módulo de rutas de la aplicación
    AuthModule,           // Módulo para gestionar la autenticación
    RouterModule,         // Módulo de enrutamiento de Angular
    CommonModule,         // Módulo que contiene directivas comunes
    ReactiveFormsModule,  // Módulo para formularios reactivos
    PagesModule,          // Módulo que gestiona las páginas de la aplicación
  ],
  providers: [
    // Aquí se pueden agregar proveedores si es necesario
  ],
  bootstrap: [AppComponent]  // Componente que arranca la aplicación
})
export class AppModule { }
