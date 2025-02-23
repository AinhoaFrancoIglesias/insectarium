import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

/**
 * Rutas de navegación para el módulo de autenticación.
 * Define las rutas para las páginas de login, registro y perfil de usuario.
 */
const routes: Routes = [
  /** Ruta para la página de login */
  { path: 'login', component: LoginComponent },

  /** Ruta para la página de registro */
  { path: 'register', component: RegisterComponent },

  /** Ruta para la página de perfil */
  { path: 'profile', component: ProfileComponent }
];

/**
 * Módulo de rutas para la autenticación.
 * Configura las rutas relacionadas con la autenticación, como login, registro y perfil.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],  // Importa RouterModule con las rutas definidas
  exports: [RouterModule]  // Exporta RouterModule para que esté disponible en otros módulos
})
export class AuthRoutingModule {}
