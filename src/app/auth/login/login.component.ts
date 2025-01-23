import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    // Define el formulario y sus validaciones
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Métodos para acceder a los controles del formulario
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('Iniciando sesión con:', { email, password });

      // Aquí se puede añadir lógica de autenticación real (por ejemplo, un servicio HTTP)
      // Por simplicidad, asumimos que el inicio de sesión es exitoso:
      if (email === 'a@g.com' && password === '123456') {
        console.log('Inicio de sesión exitoso');
        this.router.navigate(['/profile']); // Redirige al perfil
      } else {
        console.error('Credenciales incorrectas');
        alert('Email o contraseña incorrectos');
      }
    }
  }

  // Método para redirigir a la página de registro
  goToRegister() {
    this.router.navigate(['/auth/register']); // Redirige a la página de registro
  }
}
