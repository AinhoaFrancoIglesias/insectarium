import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from '../../auth/auth-routing.module';

/**
 * Módulo de la página de inicio de la tienda de insectos.
 * 
 * Este módulo contiene el componente `HomeComponent`, que sirve como la página principal de la tienda.
 * Incluye la lógica para mostrar enlaces a las categorías de productos. Este módulo también importa
 * el módulo de formularios reactivos y el módulo de rutas de autenticación.
 */
@NgModule({
  declarations: [
    HomeComponent  // Declaración del componente HomeComponent
  ],
  imports: [ 
    CommonModule,  // Importa el módulo común de Angular
    ReactiveFormsModule,  // Importa ReactiveFormsModule para trabajar con formularios reactivos
    AuthRoutingModule  // Importa el módulo de rutas de autenticación para gestionar la navegación
  ],
  exports: [ 
    HomeComponent  // Exporta el componente HomeComponent para que pueda ser utilizado en otros módulos
  ]
})
export class HomeModule { }
