import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

/**
 * Componente de inicio de sesión.
 * Este componente maneja el formulario de inicio de sesión, validaciones y la navegación hacia otras páginas.
 *
 * @export
 * @class LoginComponent
 */
@Component({
  selector: 'app-login',  // Selector del componente en la vista.
  templateUrl: './login.component.html',  // Plantilla HTML del componente.
  styleUrls: ['./login.component.css']  // Estilos CSS del componente.
})
export class LoginComponent {
  
  /**
   * Formulario reactivo para el inicio de sesión.
   * Contiene los campos de email y contraseña con sus validaciones.
   * @memberof LoginComponent
   */
  loginForm: FormGroup;

  /**
   * Crea una instancia de LoginComponent.
   * Inicializa el formulario con las validaciones necesarias.
   * 
   * @param {FormBuilder} fb - Servicio de FormBuilder para crear formularios reactivos.
   * @param {Router} router - Servicio de enrutamiento para navegar entre páginas.
   * @memberof LoginComponent
   */
  constructor(private fb: FormBuilder, private router: Router) {
    // Define el formulario y sus validaciones
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // Campo de email con validación requerida y de formato de email.
      password: ['', [Validators.required, Validators.minLength(6)]]  // Campo de contraseña con validación requerida y mínima longitud de 6 caracteres.
    });
  }

  /**
   * Obtiene el control del formulario para el campo de email.
   * 
   * @readonly
   * @memberof LoginComponent
   */
  get email() {
    return this.loginForm.get('email');
  }

  /**
   * Obtiene el control del formulario para el campo de contraseña.
   * 
   * @readonly
   * @memberof LoginComponent
   */
  get password() {
    return this.loginForm.get('password');
  }

  /**
   * Maneja el envío del formulario de inicio de sesión.
   * Si el formulario es válido, redirige al usuario a la página principal.
   * 
   * @memberof LoginComponent
   */
  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('Iniciando sesión con:', { email, password });

      // Redirige a la página de inicio
      this.router.navigate(['/pages/home']);
    }
  }

  /**
   * Redirige al usuario a la página de registro.
   * 
   * @memberof LoginComponent
   */
  goToRegister() {
    this.router.navigate(['/auth/register']); // Redirige a la página de registro
  }
}
