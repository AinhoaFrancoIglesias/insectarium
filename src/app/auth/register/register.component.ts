import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  router: any;

  constructor(private fb: FormBuilder) {
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

  // Validador personalizado para comprobar que las contraseñas coinciden
  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password');
    const confirmPassword = group.get('confirmPassword');
    return password && confirmPassword && password.value === confirmPassword.value
      ? null : { mismatch: true };
  }

  // Métodos de acceso a los controles del formulario
  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.registerForm.valid) {
      const { username, email, password } = this.registerForm.value;
      console.log('Registrando usuario:', { username, email, password });
        this.router.navigate(['/pages/home']); // Redirige al home
    }
  }
}
