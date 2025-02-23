import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  mensaje: string = "";
  messageColor: string = "red";

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: [
        '', 
        [ 
          Validators.required, 
          Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/) // Permite solo letras y espacios
        ]
      ],
      email: [
        '', 
        [
          Validators.required, 
          Validators.email
        ]
      ]
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();  // Evita el comportamiento por defecto del formulario (recarga de página)
    
    if (this.contactForm.invalid) {
      this.mensaje = "Rellenar todos los campos correctamente";
      this.messageColor = "red";
      this.contactForm.markAllAsTouched(); // Muestra los errores en los campos
      return;
    }

    this.mensaje = "Enviado";
    this.messageColor = "green";
    this.contactForm.reset(); // Borra los datos del formulario pero permanece en la misma página
  }
}
