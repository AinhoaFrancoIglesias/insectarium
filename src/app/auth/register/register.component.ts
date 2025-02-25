import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Importa Router para la navegación

/**
 * Componente de registro de usuario.
 * Este componente permite al usuario registrarse proporcionando un nombre de usuario,
 * correo electrónico, contraseña y confirmación de contraseña.
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  /** Formulario reactivo para el registro de usuario */
  registerForm: FormGroup;

  /**
   * Constructor del componente de registro.
   * Inicializa el formulario reactivo con las validaciones correspondientes.
   * 
   * @param fb Instancia de FormBuilder para crear el formulario.
   * @param router Instancia de Router para la navegación después del registro.
   */
  constructor(private fb: FormBuilder, private router: Router) {
    // Definir el formulario reactivo con sus validaciones
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],  // Nombre de usuario
      email: ['', [Validators.required, Validators.email]],  // Correo electrónico
      password: ['', [Validators.required, Validators.minLength(6)]],  // Contraseña
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]], // Confirmar contraseña
    }, {
      validators: this.passwordMatchValidator  // Validación de contraseñas coincidentes
    });
  }

  /**
   * Validador personalizado para comprobar que las contraseñas coinciden.
   * 
   * @param group Grupo de controles del formulario.
   * @returns Retorna null si las contraseñas coinciden, o un objeto de error si no lo hacen.
   */
  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password');
    const confirmPassword = group.get('confirmPassword');
    return password && confirmPassword && password.value === confirmPassword.value
      ? null : { mismatch: true };  // Si las contraseñas no coinciden, devuelve un error
  }

  // Métodos de acceso a los controles del formulario

  /**
   * Obtiene el control de "username" del formulario.
   */
  get username() {
    return this.registerForm.get('username');
  }

  /**
   * Obtiene el control de "email" del formulario.
   */
  get email() {
    return this.registerForm.get('email');
  }

  /**
   * Obtiene el control de "password" del formulario.
   */
  get password() {
    return this.registerForm.get('password');
  }

  /**
   * Obtiene el control de "confirmPassword" del formulario.
   */
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  /**
   * Método para manejar el envío del formulario.
   * Si el formulario es válido, se procesa el registro y se redirige al login.
   */
  onSubmit() {
    if (this.registerForm.valid) {
      const { username, email, password } = this.registerForm.value;
      console.log('Registrando usuario:', { username, email, password });
      this.router.navigate(['/login']); // Redirige a la página de login después del registro
    }
  }
}
