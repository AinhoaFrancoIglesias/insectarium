import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';
import { ShopModule } from './shop/shop.module';
import { GuidesModule } from './guides/guides.module';
import { GuidesRoutingModule } from './guides/guides-routing.module';
import { BlogComponent } from './blog/blog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';

/**
 * Módulo de páginas de la aplicación.
 * 
 * Este módulo agrupa los módulos y componentes relacionados con las páginas principales de la aplicación,
 * como la página de inicio, contacto, tienda, guías y blog. Además, importa módulos auxiliares como el 
 * módulo de formularios reactivos para el manejo de formularios en las páginas. 
 * Las páginas proporcionan contenido variado y permiten la navegación entre diferentes secciones de la tienda.
 */
@NgModule({
  declarations: [
    BlogComponent,
    NotfoundComponent  // Declaración del componente Blog
  ],
  imports: [
    CommonModule,  // Módulo común de Angular
    HomeModule,  // Módulo de la página de inicio
    ContactModule,  // Módulo de la página de contacto
    ShopModule,  // Módulo de la tienda
    GuidesModule,  // Módulo de las guías
    GuidesRoutingModule,  // Módulo de enrutamiento de las guías
    ReactiveFormsModule  // Módulo para formularios reactivos
  ],
  exports: [
    HomeModule,  // Exportación del módulo de la página de inicio
    ContactModule,  // Exportación del módulo de la página de contacto
    ShopModule,  // Exportación del módulo de la tienda
    GuidesModule  // Exportación del módulo de las guías
  ]
})
export class PagesModule {}
