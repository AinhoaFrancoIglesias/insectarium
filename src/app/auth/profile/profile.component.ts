import { Component } from '@angular/core';

/**
 * Componente de perfil de usuario.
 * Este componente maneja la visualización y actualización de la foto de perfil del usuario.
 *
 * @export
 * @class ProfileComponent
 */
@Component({
  selector: 'app-profile',  // Selector del componente en la vista.
  templateUrl: './profile.component.html',  // Plantilla HTML del componente.
  styleUrls: ['./profile.component.css']  // Estilos CSS del componente.
})
export class ProfileComponent {
  
  /**
   * Maneja el clic en la foto de perfil.
   * Al hacer clic, simula el clic en el campo de entrada para seleccionar una foto.
   *
   * @memberof ProfileComponent
   */
  onPhotoClick(): void {
    // Obtiene el elemento de entrada para la selección de archivo
    const uploadPhoto = document.getElementById('uploadPhoto') as HTMLInputElement;
    uploadPhoto.click();  // Dispara el evento de clic para seleccionar una foto
  }

  /**
   * Maneja el cambio de foto cuando se selecciona un archivo.
   * Lee la imagen seleccionada y la muestra como la nueva foto de perfil.
   * 
   * @param {Event} event El evento de cambio de archivo.
   * @memberof ProfileComponent
   */
  onPhotoChange(event: Event): void {
    const input = event.target as HTMLInputElement;  // Obtiene el objetivo del evento
    const file = input.files?.[0];  // Obtiene el primer archivo seleccionado
    if (file) {
      const reader = new FileReader();  // Crea un lector de archivos
      reader.onload = (e) => {
        // Una vez que el archivo se ha leído, actualiza la foto de perfil
        const userPhoto = document.getElementById('userPhoto') as HTMLImageElement;
        userPhoto.src = e.target?.result as string;  // Asigna la nueva fuente de la imagen
      };
      reader.readAsDataURL(file);  // Lee el archivo como una URL de datos
    }
  }
}
