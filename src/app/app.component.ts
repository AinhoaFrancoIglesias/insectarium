import { Component } from '@angular/core';

/**
 * Componente principal de la aplicación.
 * Representa el componente raíz que contiene la estructura principal
 * y el título de la aplicación.
 * 
 * @export
 * @class AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  /**
   * Título de la aplicación
   * Este valor se utiliza en la vista para mostrar el nombre de la app.
   * 
   * @memberof AppComponent
   */
  title = 'insectarium';
}
