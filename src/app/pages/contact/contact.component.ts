import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Componente de contacto que gestiona el formulario de contacto.
 * 
 * Este componente permite a los usuarios enviar un mensaje a través de un formulario. 
 * El formulario incluye validaciones para los campos de nombre y correo electrónico.
 * 
 * @component
 */
@Component({
  selector: 'app-contact',  // Selector para utilizar el componente en HTML
  templateUrl: './contact.component.html',  // Archivo HTML asociado al componente
  styleUrls: ['./contact.component.css']  // Archivo de estilos CSS asociado al componente
})
export class ContactComponent {
  /** Formulario reactivo para manejar los datos del formulario de contacto */
  contactForm: FormGroup;

  /** Mensaje a mostrar después de enviar el formulario */
  mensaje: string = "";

  /** Color del mensaje de estado, cambia según el resultado de la validación */
  messageColor: string = "red";

  /**
   * Constructor que inicializa el formulario de contacto.
   * 
   * @param fb Instancia de FormBuilder para crear el formulario reactivo
   */
  constructor(private fb: FormBuilder) {
    // Inicialización del formulario con validaciones para los campos nombre y email
    this.contactForm = this.fb.group({
      nombre: [
        '', 
        [ 
          Validators.required,  // Valida que el campo no esté vacío
          Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/) // Permite solo letras y espacios
        ]
      ],
      email: [
        '', 
        [
          Validators.required,  // Valida que el campo no esté vacío
          Validators.email      // Valida que el campo tenga un formato de email válido
        ]
      ]
    });
  }

  /**
   * Método que se ejecuta al enviar el formulario de contacto.
   * 
   * Si el formulario es válido, muestra un mensaje de éxito y lo reinicia.
   * Si es inválido, muestra un mensaje de error.
   * 
   * @param event Evento de envío del formulario
   */
  onSubmit(event: Event) {
    event.preventDefault();  // Evita el comportamiento por defecto del formulario (recarga de página)
    
    if (this.contactForm.invalid) {
      // Si el formulario es inválido, muestra un mensaje de error
      this.mensaje = "Rellenar todos los campos correctamente";
      this.messageColor = "red";
      this.contactForm.markAllAsTouched(); // Marca todos los campos como tocados para mostrar errores
      return;
    }

    // Si el formulario es válido, muestra un mensaje de éxito
    this.mensaje = "Enviado";
    this.messageColor = "green";
    this.contactForm.reset(); // Borra los datos del formulario pero permanece en la misma página
  }
}
